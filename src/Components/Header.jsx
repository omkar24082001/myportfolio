import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

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
        <li><a href="#home" className='hover:text-yellow-500'>Home</a></li>
        <li><a href="#about" className='hover:text-yellow-500'>About</a></li>
        <li><a href="#skills" className='hover:text-yellow-500'>My Skills</a></li>
        <li><a href="#project" className='hover:text-yellow-500'>Projects</a></li>
        <li><a href="#resume" className='hover:text-yellow-500'>My Resume</a></li>
        <li><a href="#contact" className='hover:text-yellow-500'>Contact</a></li>
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
              <li className='py-2'><a href="#home" className='text-white hover:text-yellow-500'>Home</a></li>
              <li className='py-2'><a href="#about" className='text-white hover:text-yellow-500'>About</a></li>
              <li className='py-2'><a href="#skills" className='text-white hover:text-yellow-500'>My Skills</a></li>
              <li className='py-2'><a href="#project" className='text-white hover:text-yellow-500'>Projects</a></li>
              <li className='py-2'><a href="#resume" className='text-white hover:text-yellow-500'>My Resume</a></li>
              <li className='py-2'><a href="#contact" className='text-white hover:text-yellow-500'>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
