import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import facebook_icon from '../assets/facebook_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='py-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 mx-auto text-gray-300 text-sm'>
      <div className='flex gap-5 my-6'>
        <img className='w-7 cursor-pointer' src={youtube_icon} alt='YouTube' />
        <img className='w-7 cursor-pointer' src={twitter_icon} alt='Twitter' />
        <img className='w-7 cursor-pointer' src={instagram_icon} alt='Instagram' />
        <img className='w-7 cursor-pointer' src={facebook_icon} alt='Facebook' />
      </div>

      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-4'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gifts Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='text-gray-500 text-xs mt-6'>© 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
