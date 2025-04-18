import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import caret_icon from '../assets/caret_icon.svg'
import profile_img from '../assets/profile_img.png'
import { logout } from '../firebase'

const NavBar = () => {

  const [showDropdown, setShowDropDown] = useState(false)
  const navRef = useRef()
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('bg-[#141414]')
      }else{
        navRef.current.classList.remove('bg-[#141414]')
      }
    })
  },[])

  return (
    <div ref={navRef} className='w-full flex h-12 sm:h-18 px-5 sm:px-10 justify-between text-sm fixed text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] z-[1] md:py-[20px] md:px-[3%] '>
      <div className='flex items-center gap-[50px]'>
        <img className='w-[90px] sm:h-[30px] md:h-[25px]' src={logo} alt='logo' />
        
        {/* Navigation for large screens only */}
        <ul className='gap-[20px] list-none hidden sm:flex'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Tv Shows</li>
          <li className='cursor-pointer'>Movies</li>
          <li className='cursor-pointer'>New & Popular</li>
          <li className='cursor-pointer'>My List</li>
          <li className='cursor-pointer'>Browse by Language</li>
        </ul>
      </div>
      
      <div className='flex items-center gap-2 sm:gap-[20px]'>
        <img className='w-[15px] sm:w-[20px] cursor-pointer' src={search_icon} alt='search_icon' />
        <p className='text-[13px]'>Children</p>
        <img className='w-[15px] sm:w-[20px] cursor-pointer' src={bell_icon} alt='bell_icon' />
        
        <div className='flex items-center gap-[5px] sm:gap-[10px] cursor-pointer relative group'>
          <img className='rounded-md w-[25px] sm:w-[35px]' src={profile_img} alt='profile_img' />
          <img onClick = {() => setShowDropDown(prev => !prev)} src={caret_icon} alt='drop-down_icon' />
          {showDropdown && (
            <div className='absolute top-[100%] right-0 w-max bg-[#191919] py-[18px] px-[22px] underline rounded-sm z-[1]'>
            <p onClick={() => {
              logout();
              setShowDropDown(false);
            }} className='text-xs cursor-pointer'>Sign Out of Netflix</p>
          </div>
          )} 
        </div>
      </div>
    </div>
  )
}

export default NavBar
