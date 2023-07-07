import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function RootLayout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  )
}
