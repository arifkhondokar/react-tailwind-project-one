import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="sm:py-5 md:px-10 px-7 mt-20">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Arif Khondokar</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Data Analyst</p>
        <p className="hidden sm:block">Designed by @ernestechie</p>
      </div>

      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start text-white ">
        <a
          target="_blank"
          rel="noreferrer"
        >
          <CiFacebook />
        </a>

        <a
          className="ml-4"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>

        <a
          className="ml-4"
          target="_blank"
          rel="noreferrer"
        > 
          <FaYoutube />
        </a>

        <a
          className="ml-4"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </div>
    </div>
    </>
  )
}

export default Footer