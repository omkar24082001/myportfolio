import React from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between'>

    <div className='flex items-center justify-center gap-2'>
        
       <p className=' text-yellow-600 text-3xl'><b>Portfolio</b></p>
       
    </div>
    <ul className='hidden lg:flex justify-between items-center font-lato text-white gap-6 '>
      <li> <a href="#">Home</a></li>
      <li> <a href="#">About</a></li>
      <li> <a href="#">My Resume</a></li>
      <li> <a href="#">Contact</a></li>
    </ul>
    <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
   
    <button className='rounded-md px-4 py-3 bg-blue-400  hover:bg-blue-600 text-white'>Download Resume</button>
    </div>
    <div className='lg:hidden'>
    <FaBars/>
    </div>
    </div>
  )
}

export default Header