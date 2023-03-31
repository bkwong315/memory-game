import React from 'react';

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 px-4 py-2 bg-gradient-to-t from-red-800 to-red-600 text-white font-extrabold'>
      <span>
        Images from <a href='https://www.hiclipart.com/'>HiClipArt</a>
      </span>
      <span className='text-center'>
        <a href='#'>GitHub</a>
      </span>
      <span className='text-end'>
        Favicon from Andreuvv, Public domain, via Wikimedia Commons
      </span>
    </footer>
  );
};

export default Footer;
