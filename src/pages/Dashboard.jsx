import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  // const container = {
    
  //   maxWidth: "4xl",
  //   py: "20px"
  // }

  // const box = {
  //   textAlign: "center",
  //   bg: "grey",
  //   ml: "30px",
  //   marginTop: "10px",
  //   p: ".4rem",
  //   boxShadow: "1px 4px 8px black",
  //   ":hover": {
  //     color: "wheat",
  //     bg: "red",
  //     cursor: "pointer"
  //   }
  // }

  const tasks = useLoaderData()
  return (
    // <Container sx={container} as="section">
    //   <Heading my={"1rem"} p={"1rem"}>Chakra UI Component</Heading>
    //   <Text marginLeft={"30px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos!</Text>
    //   <Text ml={"30px"} color={"blue.600"} fontWeight={"bold"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos!</Text>
    //   <Box bg={"orange"} p={"1rem"} ml={"30px"}>
    //     <Text color="white">This is a box</Text>
    //   </Box>

    //   <Box sx={box}>
    //     New Box
    //   </Box>
    // </Container>
 
    <SimpleGrid spacing={10} minChildWidth={"300px"}>
      {/* <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>

      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>

      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box> */}

      {tasks && tasks.map(item => (

      <Card key={item.id} borderTop={"8px"} borderTopColor={"purple.500"}>
        <CardHeader>
          <Flex gap={5}>
            <Box w={"50px"} h={"50px"}>
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading as={"h3"} size={"sm"}>{item.title}</Heading>
              <Text>By {item.author}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody color={"gray.500"}>
          <Text >{item.description}</Text>
        </CardBody>

        <Divider borderColor={"gray.200"} />
        <CardFooter>
          <HStack>
            <Button variant={"ghost"} leftIcon={<ViewIcon/>}>Watch</Button>
            <Button variant={"ghost"} leftIcon={<EditIcon />}>Comment</Button>
          </HStack>
        </CardFooter>
      </Card>
      
      ))}
    </SimpleGrid>
  )
}


 export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  return res.json()
}