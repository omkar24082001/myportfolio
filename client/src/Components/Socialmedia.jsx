import { space } from 'postcss/lib/list';
import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socialmedia = () => {
    return (
      <div style={styles.iconContainer} className='mt-[-40px] sm:mt-[-8%]'>
      <a href="https://www.linkedin.com/in/omkar-rawool-0a804a21b/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/omkar24082001" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
        <FaGithub size={30} />
      </a>
      <a href="rawoolomkar861@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
        <MdEmail size={30} />
      </a>
      <a href="https://www.facebook.com/omkar.rawool.1656/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
        <FaFacebook size={30} />
      </a>
      <a href="https://www.instagram.com/____omkar2408/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
        <FaInstagram size={30} />
      </a>


      
    </div>


    
      );
    };
    
    const styles = {
      iconContainer: {
        display: 'flex',
        gap: '25px',
        
      },
      iconLink: {
        color: 'white', // You can change the color as needed
        textDecoration: 'none',
        transition: 'color 0.3s',
      },
    }

export default Socialmedia;
