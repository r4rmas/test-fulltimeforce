import Commit from "./types/Commit"

const url = 'http://localhost:3000'

const Api = {
  getAllCommits: async (): Promise<GetAllCommitsResponse> => {
    const res = await fetch(url + "/commits", {
      method: "GET"
    })
    return await res.json()
  }
}

interface GetAllCommitsResponse {
  commits: Commit[]
}

export default Api