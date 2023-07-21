import { Flex, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Api from "./Api"
import Commit from "./types/Commit"
import Card from "./components/Card"
import Header from "./components/Header"
import MenuBar from "./components/MenuBar"

export default function App() {
  const [commits, setCommits] = useState<Commit[] | null>(null)

  const ascOrder = () => {
    const aux = commits ? [...commits ] : null
    aux?.sort((a, b) => {
      const aTimestamp = new Date(a.author.date).getTime()
      const bTimestamp = new Date(b.author.date).getTime()

      return aTimestamp - bTimestamp
    })

    setCommits(aux ?? null)
  }

  const descOrder = () => {
    const aux = commits ? [...commits ] : null
    aux?.sort((a, b) => {
      const aTimestamp = new Date(a.author.date).getTime()
      const bTimestamp = new Date(b.author.date).getTime()

      return bTimestamp - aTimestamp
    })


    setCommits(aux ?? null)
  }

  useEffect(() => {
    Api.getAllCommits()
    .then(res => setCommits(res.commits))
  }, [])

  return (
    <Flex
      width={'100%'}
      direction={'column'}
    >
      <Header />
      <MenuBar 
        handleAscSort={ascOrder}
        handleDescSort={descOrder}
      />
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
    </Flex>
  )
}