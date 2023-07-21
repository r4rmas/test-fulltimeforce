import { Controller, Get } from '@nestjs/common';
import octokit from '../octokit'
import { Commit, author } from './types'

@Controller('commits')
export class CommitsController {
  @Get()
  async getAll() {
    let commits: Commit[] = []
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/commits', {
        owner: 'r4rmas',
        repo: 'test-fulltimeforce'
    })

    response.data.forEach(d => {
      commits.push({
        author: <author>d.commit.author,
        message: d.commit.message,
        htmlUrl: d.html_url
      })
    })

    return {
      commits
    }
  }
}
