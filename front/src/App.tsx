import { Flex, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import Api from "./Api"

export default function App() {
  useEffect(() => {
    Api.getAllCommits()
    .then(commits => console.log(commits))
  }, [])

  return (
    <Flex
      width={'100%'}
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text>Hello, world!</Text>
    </Flex>
  )
}