import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './style.css';

const Icons = () => {
  return (
    <footer data-testid='icons' className='socialMedia'>
      <FaFacebookF className='icon' />
      <FaTwitter className='icon' />
      <FaInstagram className='icon' />
    </footer>
  );
};

export default Icons;
