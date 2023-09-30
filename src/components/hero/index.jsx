import React from 'react';
import mockupImage from '../../assets/illustration-mockups.svg';
import './style.css';

const Hero = () => {
  return (
    <section data-testid='hero' className='hero'>
      <img className='mockupImage' src={mockupImage} alt='mockupImage' />
    </section>
  );
};

export default Hero;
