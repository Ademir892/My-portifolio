import axios from "axios";

import type { GitHubRepository } from "../types/github";

const GITHUB_API_URL = "https://api.github.com";

export async function fetchGitHubProjects(
  username: string
): Promise<GitHubRepository[]> {
  try {
    const response = await axios.get<GitHubRepository[]>(
      `${GITHUB_API_URL}/users/${username}/repos`
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar projetos do GitHub:", error);

    return [];
  }
}