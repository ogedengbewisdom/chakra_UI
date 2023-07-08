import { Tab, TabList, TabPanel, TabPanels, Tabs, SimpleGrid, Box, Heading} from "@chakra-ui/react";
import Dashboard from "./Dashboard";

export default function Create() {
  return (
    <Tabs mt={"40px"} p={"20px"} colorScheme="red" >
      <TabList>
        <Tab >One</Tab>
        <Tab _selected={{color: "blue", bg: "purple"}}>Two</Tab>
        <Tab _selected={{color: "blue", bg: "purple"}} borderRadius={"10px"}>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>One!</TabPanel>
        <TabPanel>
          <Heading>Dashboard</Heading>
        <SimpleGrid spacing={10} minChildWidth={"300px"}>
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
      <Box height={"200px"} border={"1px solid"}></Box>
      <Box height={"200px"} border={"1px solid"}></Box>
    </SimpleGrid>
        </TabPanel>
        <TabPanel>Three!</TabPanel>
      </TabPanels>
    </Tabs>
  )
}
