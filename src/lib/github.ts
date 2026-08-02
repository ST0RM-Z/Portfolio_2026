import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const FEATURED_REPOS = ["portfolio-st0rm", "mac-file-declutter"];
const EXCLUDED_REPOS = ["Portfolio_2026"];

/**
 * Fetches and parses the README from GitHub to extract a clean description.
 * This ensures your portfolio content is always in sync with your repository docs.
 */
async function getRepoReadme(username: string, repoName: string): Promise<string | null> {
  try {
    const { data } = await octokit.rest.repos.getReadme({
      owner: username,
      repo: repoName,
    });
    
    // Decode base64 content from GitHub API
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    
    // Clean the Markdown:
    // 1. Remove Headers (#)
    // 2. Remove Images (![...])
    // 3. Remove Links ([text](url) -> text)
    // 4. Extract first paragraph block
    const cleanContent = content
      .replace(/^#+\s+.+$/gm, '') 
      .replace(/!\[.*?\]\(.*?\)/g, '') 
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .trim()
      .split('\n\n')[0];

    return cleanContent.length > 150 
      ? cleanContent.substring(0, 150) + "..." 
      : cleanContent;
  } catch {
    // If README doesn't exist, we return null so the fallback description is used
    return null;
  }
}

export async function getRepositories(username: string) {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 20, 
    });

    // Fetch READMEs for the top repos to keep API calls manageable
    const reposWithData = await Promise.all(
      data
        .filter((repo) => !EXCLUDED_REPOS.includes(repo.name))
        .map(async (repo) => {
          const readmeDesc = await getRepoReadme(username, repo.name);

          return {
            id: repo.id,
            title: repo.name,
            // Use README content, fallback to repo description, or a default
            description: readmeDesc || repo.description || "A high-performance project built with care.",
            link: repo.html_url,
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            language: repo.language || "N/A",
          };
        })
    );

    // Apply sorting logic: Featured repos first, then by stars
    return reposWithData.sort((a, b) => {
      const aFeatured = FEATURED_REPOS.includes(a.title) ? 1 : 0;
      const bFeatured = FEATURED_REPOS.includes(b.title) ? 1 : 0;
      return bFeatured - aFeatured || b.stars - a.stars;
    });

  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}