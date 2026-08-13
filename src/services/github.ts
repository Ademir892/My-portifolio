import type { GitHubRepository } from "../types/github";

const GITHUB_API_URL = "https://api.github.com";

export async function fetchGitHubProjects(
  username: string,
): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API respondeu com status ${response.status}`,
      );
    }

    const repositories =
      (await response.json()) as GitHubRepository[];

    return repositories;
  } catch (error) {
    console.error(
      "Erro ao buscar projetos do GitHub:",
      error,
    );

    return [];
  }
}