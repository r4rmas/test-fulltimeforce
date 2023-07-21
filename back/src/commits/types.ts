export type Commit = {
  author: author
  message: string
  htmlUrl: string
}

export type author = {
  name: string
  email: string
  date: string
}