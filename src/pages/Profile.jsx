import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { TabList, Tabs, Tab, TabPanels, TabPanel, ListItem, ListIcon, List } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs variant={"enclosed"} mt={"40px"} padding={"20px"}>
      <TabList>
        <Tab _selected={{bg: "purple.400", color: "white"}} borderTop={"15px"}>Account Info</Tab>
        <Tab _selected={{bg: "purple.400", color: "white"}}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem mt={"10px"}>
              <ListIcon as={EmailIcon} />
              Email: wisdom@gmail.com
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={StarIcon} />
              Start boy
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List>
            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>

            <ListItem mt={"10px"}>
              <ListIcon as={CheckCircleIcon} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aspernatur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
