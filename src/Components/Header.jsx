import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>

    <div className='flex items-center justify-center gap-2'>
        
       <p className=' text-yellow-600 text-3xl'><b>Portfolio</b></p>
       
    </div>
    <ul className='hidden lg:flex justify-between items-center font-lato text-white gap-6 '>
      <li> <a href="src\App.jsx">Home</a></li>
      <li> <a href="src\Aboutpages.jsx">About</a></li>
      <li> <a href="#">My Resume</a></li>
      <li> <a href="#">Contact</a></li>
    </ul>
    <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
   
    <a
              href="public\assets\OMKAR_RAWOOL_MERN_DEV (4).pdf"
              download="public\assets\OMKAR_RAWOOL_MERN_DEV (4).pdf"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Download Resume
            </a>
    </div>
    <div className='lg:hidden'>
    <FaBars/>
    </div>
    </div>
  )
}

export default Header