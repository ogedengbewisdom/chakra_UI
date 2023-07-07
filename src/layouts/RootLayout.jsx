import { Fragment } from "react"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
