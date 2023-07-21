import { 
  Card as ChakraCard, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Text,
  Button
} from "@chakra-ui/react"
import Commit from "../types/Commit"

export default function Card({ commit }: { commit: Commit }) {
  return (
    <ChakraCard width={'100%'} height={'100%'}>
      <CardHeader fontWeight={'bold'}>{`> ${commit.message}`}</CardHeader>
      <CardBody display={'grid'} gridTemplateColumns={'70px 1fr'}>
        <Text fontWeight={'bold'}>Author:</Text>
        <Text>{commit.author.name}</Text>
        <Text fontWeight={'bold'}>Email:</Text>
        <Text>{commit.author.email}</Text>
        <Text fontWeight={'bold'}>Date:</Text>
        <Text>{commit.author.date}</Text>
      </CardBody>
      <CardFooter>
        <a href={commit.htmlUrl} target="_blank">
          <Button>View</Button>
        </a>
      </CardFooter>
    </ChakraCard>
  )
}