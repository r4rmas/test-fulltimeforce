import Author from "./Author"

export type Commit = {
  author: Author
  message: string
  htmlUrl: string
}

export default Commit