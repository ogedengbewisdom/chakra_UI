import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"
import SideBar from "../components/SideBar"

export default function RootLayout() {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"}>
        <GridItem
        as={"aside"}
        bg={"purple.400"}
        colSpan={{base: 6, lg: 2, xl: 1}}
        p={"30px"}
        minHeight={{lg: "100vh"}}
        >
            <SideBar />
        </GridItem>
        <GridItem
        as={"main"}
        bg={"purple.300"}
        colSpan={{base: 6, lg: 4, xl: 5}}
        p={"40px"}
        >
            <NavBar />
            <Outlet />
          </GridItem>
    </Grid>
  )
}
