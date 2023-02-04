import React from "react";
import { Navbar, Button, Link } from "@nextui-org/react";
import { FiActivity } from 'react-icons/fi'

function topMenu() {

  return (
    <Navbar isBordered variant="static">
      <Navbar.Brand>
        <FiActivity />
      </Navbar.Brand>
      <Navbar.Content hideIn={"xs"}>


      </Navbar.Content>
    </Navbar>
  )
}


export default topMenu