import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN
})

export default octokit