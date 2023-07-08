import React from 'react'
import { AtSignIcon, CalendarIcon, EditIcon, LinkIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
  return (
    <List spacing={5} color={"white"} fontSize={"1.2em"} fontWeight={"bold"}>
        <ListItem>
            <ListIcon as={CalendarIcon} />
            <NavLink to={"/"}>Dashboard</NavLink>
        </ListItem>

        <ListItem>
            <ListIcon as={EditIcon} />
            <NavLink to={"/create"}>New Member</NavLink>
        </ListItem>

        <ListItem>
            <LinkIcon as={AtSignIcon} />
            <NavLink to={"/profile"}>Profile</NavLink>
        </ListItem>
    </List>
  )
}
