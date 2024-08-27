export interface GithubProject {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: string;
  forks_count: string;
  language: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}
