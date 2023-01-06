import React from 'react'
import "./Home.css"
import { TbWorld } from "react-icons/tb"
import { AiFillMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import Navbar from '../components/Navbar'
import SidenavAdvance from '../components/SidenavAdvance'
import Sidenav from '../components/Sidenav'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        
        <span><Navbar/></span>
        {/* <span className='mobile'><NavbarMobile/></span> */}

        <div className="content">

            <div className='intro'>
                <div className="intro-content">
                    <h1>Dorabhai</h1>
                    <h2>CONTENT CREATOR</h2>
                    <hr />
                    <ul className='contact'>
                        <li>
                            <TbWorld/>
                            <h3>dummy</h3>
                        </li>
                        <li>
                            <AiFillMail/>
                            <h3>hello@dorabhai.com</h3>
                        </li>
                        <li className='phone-no'>
                            <BsFillTelephoneFill/>
                            <h3>123-456-7890</h3>
                        </li>
                    </ul>
                </div>
                <img className='intro-img' src="data:image/jpeg;base64,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" alt="" />
            </div>
            
            <div className='sidenav-headings'>
                <h3>Semester Courses</h3>
                <h5>See All</h5>
            </div>

            <SidenavAdvance/>

            <div className='sidenav-headings second'>
                <h3>Library</h3>
                <h5>See All</h5>
            </div>

            <Sidenav/>

        </div>
      </div>
    </div>
  )
}

export default Home
