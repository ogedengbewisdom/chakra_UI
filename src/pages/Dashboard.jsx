import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const container = {
    
    maxWidth: "4xl",
    py: "20px"
  }

  const box = {
    textAlign: "center",
    bg: "grey",
    ml: "30px",
    marginTop: "10px",
    p: ".4rem",
    boxShadow: "1px 4px 8px black",
    ":hover": {
      color: "wheat",
      bg: "red",
      cursor: "pointer"
    }
  }
  return (
    <Container sx={container} as="section">
      <Heading my={"1rem"} p={"1rem"}>Chakra UI Component</Heading>
      <Text marginLeft={"30px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos!</Text>
      <Text ml={"30px"} color={"blue.600"} fontWeight={"bold"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos!</Text>
      <Box bg={"orange"} p={"1rem"} ml={"30px"}>
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={box}>
        New Box
      </Box>
    </Container>
  )
}
