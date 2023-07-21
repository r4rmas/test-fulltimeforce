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
  const getReadableDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour12: true,
      day: "numeric",
      month: "long",
      year: "numeric",
      minute: "2-digit",
      second: "2-digit",
    }

    return new Intl.DateTimeFormat("es", options)
              .format(new Date(date))
  }

  return (
    <ChakraCard 
      width={'100%'} 
      height={'100%'} 
      boxShadow={'md'}
    >
      <CardHeader fontWeight={'bold'}>
        {`> ${commit.message}`}
      </CardHeader>
      <CardBody 
        display={'grid'} 
        gridTemplateColumns={'70px 1fr'}
      >
        <Text fontWeight={'bold'}>Author:</Text>
        <Text>{commit.author.name}</Text>
        <Text fontWeight={'bold'}>Email:</Text>
        <Text>{commit.author.email}</Text>
        <Text fontWeight={'bold'}>Date:</Text>
        <Text>{getReadableDate(commit.author.date)}</Text>
      </CardBody>
      <CardFooter>
        <a href={commit.htmlUrl} target="_blank">
          <Button>View</Button>
        </a>
      </CardFooter>
    </ChakraCard>
  )
}