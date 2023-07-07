import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
  return (
    
    <Flex p={"10px"} as={"nav"} bg={"orange.300"} alignItems={"center"}>
      <Heading as={"h1"} gap={"10px"} whiteSpace={"nowrap"}>Chakra Tasks</Heading>
      <Spacer />
      <HStack spacing={"3"} wrap={"wrap"}>
      <Box bg={"gray.200"} p={"10px"}>M</Box>
      <Text>Ogedengbewisdom@gmail.com</Text>
      <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>


    // <Flex bg="gray" alignItems={"center"} wrap={"wrap"} gap={"2"} as="nav" >
    //     <Box p="10px"  bg="green.500" height="50px" >check</Box>
    //     <Box p={"10px"} justifySelf={"center"} bg="blue.500" height="50px"flexGrow={"1"}>Boxon</Box>
    //     <Spacer/>
    //     <Box width="150px" bg="red.500" height="50px"><p>brack</p></Box>
    //     <Box width="150px" bg="yellow.500" height="50px">beast</Box>
    // </Flex>
  )
}
