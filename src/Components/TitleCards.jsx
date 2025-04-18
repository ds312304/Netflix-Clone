import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGJkN2E5YTc0MDcxMDMxOGYwNzRiOGY4YzczOTMxYyIsIm5iZiI6MTc0NDg3NDk3NS45NTI5OTk4LCJzdWIiOiI2ODAwYWRkZjJjODVlNzk2NjM5OTVjNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tKwPWvWKO7CaeWfn3cEVx4rVIVrO9MmprKQUQpxdOMs'
    }
  }

  useEffect(() => {
    const refCurrent = cardsRef.current
    refCurrent.addEventListener('wheel', handleWheel)

    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err))

    return () => {
      refCurrent.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className='mt-12 mb-8 px-4 sm:px-6 md:px-[3%]'>
      <h2 className='mb-3 font-bold text-xl sm:text-2xl'>{title || 'Popular on Netflix'}</h2>
      <div
        className='flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide scroll-smooth'
        ref={cardsRef}
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            className='relative shrink-0'
            key={index}
          >
            <img
              className='rounded-md w-[160px] sm:w-[200px] md:w-[240px] hover:scale-105 transition-transform duration-200'
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt='card_image'
            />
            <p className='absolute bottom-2 right-2 text-white text-xs sm:text-sm bg-black/50 px-2 py-1 rounded'>
              {card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
