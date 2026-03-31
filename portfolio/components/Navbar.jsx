import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
            <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14'/>
        </a>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div>
            <a href="#contact">Contact <Image src={assets.arrow_icon} alt="Arrow" className='w-3'/></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
