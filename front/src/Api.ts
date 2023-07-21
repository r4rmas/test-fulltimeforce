const url = 'http://localhost:3000'

const Api = {
  getAllCommits: async () => {
    const res = await fetch(url + "/commits", {
      method: "GET"
    })
    return await res.json()
  }
}

export default Api