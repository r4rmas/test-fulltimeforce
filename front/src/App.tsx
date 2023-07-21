import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Api from "./Api"
import Commit from "./types/Commit"
import Card from "./components/Card"

export default function App() {
  const [commits, setCommits] = useState<Commit[] | null>(null)

  useEffect(() => {
    setCommits([
      {
        "author": {
          "name": "Raul Armas",
          "email": "r4rmas@gmail.com",
          "date": "2023-07-20T18:15:16Z"
        },
        "message": "create commits module & controller",
        "htmlUrl": "https://github.com/r4rmas/test-fulltimeforce/commit/72d308d1cf6900da45f62a5406396c967b579ccd"
      },
      {
        "author": {
          "name": "Raul Armas",
          "email": "r4rmas@gmail.com",
          "date": "2023-07-20T18:06:07Z"
        },
        "message": "install octokit & dotenv packages",
        "htmlUrl": "https://github.com/r4rmas/test-fulltimeforce/commit/c207f416b81f4b05d75272090b8600f778df59b1"
      },
      {
        "author": {
          "name": "Raul Armas",
          "email": "r4rmas@gmail.com",
          "date": "2023-07-20T18:01:46Z"
        },
        "message": "initial commit",
        "htmlUrl": "https://github.com/r4rmas/test-fulltimeforce/commit/6bebcfc78ebfcc23923a1007d3065bcc7290d06a"
      }
  ])
    // Api.getAllCommits()
    // .then(({ commits }) => setCommits(commits))
  }, [])

  return (
    <Flex 
      width={'100%'}
      justifyContent={'center'}
    >
      <Grid
        width={'100%'}
        maxWidth={'container.xl'}
        templateColumns={{
          md: 'repeat(2, 1fr)', 
          lg: 'repeat(3, 1fr)'
        }}
        gap={'1rem'}
        padding={'2rem'}
      >
        {commits?.map(commit => (
          <GridItem>
            <Card commit={commit} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}