import { 
  Flex, 
  Button, 
  Text, 
  HStack,
  Tooltip
} from "@chakra-ui/react"

export default function MenuBar({ handleAscSort, handleDescSort }: MenuBarProps) {
  return (
    <Flex
      backgroundColor={'blue.200'}
      padding={'1rem'}
      justifyContent={'center'}
    >
      <Flex 
        width={'100%'}
        maxWidth={'container.xl'}
        justifyContent={'flex-end'}
      >
        <HStack>
            <Tooltip label="Descending order">
              <Button
                onClick={() => handleDescSort()}
              >
                <Text fontSize={'2xl'}>🗓️</Text>
                <Text>↓</Text>
              </Button>
            </Tooltip>
            <Tooltip label="Ascending order">
              <Button
                onClick={() => handleAscSort()}
              >
                <Text fontSize={'2xl'}>🗓️</Text>
                <Text>↑</Text>
              </Button>
            </Tooltip>
        </HStack>
      </Flex>
    </Flex>
  )
}

interface MenuBarProps {
  handleAscSort: () => void,
  handleDescSort: () => void
}