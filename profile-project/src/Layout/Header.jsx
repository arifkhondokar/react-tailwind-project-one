import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import '../App.css'

const Header = () => {
  
  let [open, setOpen] = useState(false);
  
  return (
    <>
    <section id='header_section '>

      <div className='w-full max-w-7xl' >
        <nav className='md:flex items-center justify-between py-4 md:px-10 px-7 navber  '>

            <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white" 
            onClick={() => setOpen(!open)}>
              {open ? <FaBars/> : <MdCancel />}
            </div>

        {/* -------------logo---------- */}
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1" >
                <span className="text-primary hover:text-white">Project</span>
              </div>

        {/* ------------menu---------- */}
            <div>
              <ul className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}>
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <NavLink  activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500" to='/'>Home</NavLink>
                </li>
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <NavLink  activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500" to='/about'>About</NavLink>
                </li>
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <NavLink  activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500" to='/projects'>Projects</NavLink>
                </li>
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <NavLink  activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500" to='/services'>Services</NavLink>
                </li>
                <li className="md:ml-8 md:my-0 my-7 font-semibold">
                  <NavLink  activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500" to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </section>
    </>
  )
}

export default Header