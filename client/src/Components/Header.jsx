import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex  lg:flex-row justify-between items-start p-4 ' id='home'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-yellow-600 text-3xl font-bold '>Portfolio</p>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex justify-between items-center font-lato text-white gap-6'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skill">My Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/resume">My Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Download Resume Button */}
      <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
        <a
          href="public/assets/OMKAR_RAWOOL_MERN_DEV (4).png"
          download="OMKAR_RAWOOL_MERN_DEV.png"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className=' flex lg:hidden relative'>
        <button onClick={toggleMenu} className='text-white'>
          <FaBars />
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute right-0 mt-2 bg-gray-800 shadow-lg rounded-md z-10'>
            <ul className='flex flex-col p-4'>
              <li className='py-2 px-6'><Link to="/" className='text-white hover:text-yellow-500'>Home</Link></li>
              <li className='py-2 px-6'><Link to="/about" className='text-white hover:text-yellow-500'>About</Link></li>
              <li className='py-2 px-6'><Link to="/skill" className='text-white hover:text-yellow-500'>Skills</Link></li>
              <li className='py-2 px-6'><Link to="/project" className='text-white hover:text-yellow-500'>Project</Link></li>
              <li className='py-2 px-6'><Link to="/resume" className='text-white hover:text-yellow-500'> Resume</Link></li>
              <li className='py-2 px-6'><Link to="/contact" className='text-white hover:text-yellow-500'>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
