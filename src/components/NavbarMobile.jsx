import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdLocalLibrary } from "react-icons/md"
import { TfiMenu } from "react-icons/tfi"
import { BsFillPersonFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import "./NavbarMobile.css"

function NavbarMobile() {
  return (
      <ul className='navbar-mobile'>
        <li className="nav-items-mobile nav1">
            <span>< AiFillHome/></span>
        </li>
        <li className="nav-items-mobile">
            <span><MdLocalLibrary/></span>
        </li>
        <li className="nav-items-mobile">
            <span><TfiMenu/></span>
        </li>
        <li className="nav-items-mobile">
            <span><BsFillPersonFill/></span>
        </li>
        <li className="nav-items-mobile">
            <span><FaEdit/></span>
        </li>
    </ul>
  )
}

export default NavbarMobile
