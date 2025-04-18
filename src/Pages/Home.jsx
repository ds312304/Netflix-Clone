import React from 'react'
import NavBar from '../Components/NavBar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../Components/TitleCards'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>  
      <NavBar/>
      <div className='relative'> 
        <img className='w-full fade-mask'src = {hero_banner} alt ='banner-img'/>
        <div className='absolute w-[100%] px-[5%] sm:px-[3%] bottom-0'>
          <img className='w-[90%] max-w-[420px] mb-[30px] hidden md:block'src = {hero_title} alt ='hero-title'/> 
          {/* hero-caption */}
          <p className='max-w-[700px] text-[10px] mb-[3px] sm:mb-[20px] sm:text-[17px]'>Discovering his tries to a scecret ancient order, a young man living in morden Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className='flex gap-3 sm:gap-5 mb-[10px] sm:mb-[50px]'>
            <button className='border-0 outline-0 py-1 sm:py-2.5 px-2 sm:px-5 inline-flex items-center gap-[5px] sm:gap-[10px] text-[12px] sm:text-[15px] font-semibold bg-white text-black rounded cursor-pointer hover:bg-[#ffffffbf]'>
              <img className = 'w-[15px] sm:w-[25px] 'src={play_icon} alt='play-icon'/>
              Play
            </button>

            <button className='border-0 outline-0 py-1 sm:py-2.5 px-2 sm:px-5 inline-flex items-center gap-[5px] sm:gap-[10px] text-[12px] sm:text-[15px] font-semibold bg-[#6d6d6eb3] text-white rounded cursor-pointer hover:bg-[#6d6d6e66]'>
              <img className = 'w-[17px] sm:w-[25px]'src={info_icon} alt='info-icon'/>
              More info
            </button>
          </div>
          <div className='hidden md:block'>
            <TitleCards/>
          </div>
        </div>
      </div>
      <div className='sm:px-[2%] px-[2%]'>
      <TitleCards title={'Blockbuster Movies'} category={"now_playing"}/>
      <TitleCards title ={'Only on Netflix'} category={"popular"}/>
      <TitleCards title={'Upcoming'} category={"upcoming"}/>
      <TitleCards title={'Top Pics for You'} category={"top_rated"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home





