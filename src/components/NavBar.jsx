import { SunIcon, UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {

  const toast = useToast()

  const toastHandler = () => {
    toast({
      position: "top",
      title: "Logout",
      description: "logged successfully",
      isClosable: true,
      status: "warning",
      duration: 1000,
      icon: <UnlockIcon />
    })
  }
  return (
    
    <Flex as={"nav"} alignItems={{base: "flex-start", md: "center"}} flexDirection={{base: "column", md: "row"}} mb={"18px"} >
      <Heading as={"h1"} gap={"10px"} whiteSpace={"nowrap"}>Chakra Tasks</Heading>
      <Spacer />
      <HStack spacing={"1"} flexDirection={{base: "column", md: "row"}} alignItems={{base: "flex-start", md: "center"}}>
      <Avatar name='Mario' src='/img/mario.png'>
        <AvatarBadge width={"1.2em"} height={"1.2em"} border={"none"} borderRadius={"50%"} bg={"red.300"}>
          <Text color={"whiteAlpha.700"} >4</Text>
        </AvatarBadge>
      </Avatar>
      <Box p={"10px"}>Ogedengbewisdom@gmail.com</Box>
      <Button colorScheme='purple' onClick={toastHandler}>Logout</Button>
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
