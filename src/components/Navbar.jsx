import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { MdLocalLibrary } from "react-icons/md"
import { TfiMenu } from "react-icons/tfi"
import { BsFillPersonFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="nav">
            <div className='greeting'>
                <h4>Good Morning Mithilesh</h4>
                <img src="https://img.freepik.com/premium-vector/coffee-hand-drawn-vector-illustration_2699-760.jpg?size=338&ext=jpg&ga=GA1.1.220890391.1672941341&semt=sph" alt="" />
            </div>
            <ul className='navbar'>
                <li className="nav-items nav1">
                    < AiFillHome/>
                    <h4>Home</h4>
                </li>
                <li className="nav-items">
                    <MdLocalLibrary/>
                    <h4>Library</h4>
                </li>
                <li className="nav-items">
                    <TfiMenu/>
                    <h4>My Courses</h4>
                </li>
                <li className="nav-items">
                    <BsFillPersonFill/>
                    <h4>Account</h4>
                </li>
                <li className="nav-items">
                    <FaEdit/>
                    <h4>Blog</h4>
                </li>
            </ul>
            <div className="socials">
                <p>Follow us on</p>
                <div className="icons">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <img src="data:image/png;base64,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" alt="" />
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className='playstore'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Navbar