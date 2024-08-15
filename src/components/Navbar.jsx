import React from 'react';
import {menu, close, logo} from '../assets';

const Navbar = () => {
  return (
    <div className='w-screeen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
      <div className='flex jusify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]'/>
        </div>

        <div className='flex items-right'>
          <img src={close} alt="close" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]'/>
        </div>

        <div className='flex items-right'>
          <img src={menu} alt="menu" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar