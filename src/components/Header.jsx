import React from 'react';
import logo from '../assets/images/logo.png';
import {VscThreeBars} from 'react-icons/vsc';
import {GiMoon} from 'react-icons/gi';



const Header = () => {
  return (
     <header className='border h-[70px] sm:h-[80px] lg:h-[100px] xl:h-[120px] flex justify-between items-center px-2 lg:px-10'>
        <div id='logo' className='flex items-center gap-2'>
            <img src={logo} className=' w-[60px] h-[60px]  sm:w-[70px] sm:h-[70px]  lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px]'/>
            <h1 className=' text-xl sm:text-2xl lg:text-3xl xl:text-4xl uppercase whitespace-nowrap'>SOCIOLIB</h1>
        </div>
        <nav id='menu' className='hidden lg:block'>
            <ul className='flex items-center gap-5'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
        <div id='theme' className='flex items-center'>
            <button className='hidden lg:block text-[24px] cursor-pointer hover:text-slate-400 duration-500'><GiMoon/></button>
        </div>
        {/* MOBILE MENU */}
        <div className='lg:hidden flex items-center'>
          <VscThreeBars className='text-[24px] cursor-pointer hover:text-slate-400 duration-500'/>
        </div>
     </header>
  )
}

export default Header
