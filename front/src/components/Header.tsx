import { Flex, Text } from "@chakra-ui/react"

export default function Header() {
  return (
    <Flex 
      backgroundColor={'blue.500'}
      justifyContent={'center'}
      padding={'2rem'}
    >
      <Flex maxWidth={'container.xl'}>
        <Text
          color={'white'}
          fontSize={'2xl'}
          fontWeight={'bold'}
        >
          Resolution of the proposed text
        </Text>
      </Flex>
    </Flex>
  )
}