import React, { useEffect, useState } from 'react'
import back_icon from '../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGJkN2E5YTc0MDcxMDMxOGYwNzRiOGY4YzczOTMxYyIsIm5iZiI6MTc0NDg3NDk3NS45NTI5OTk4LCJzdWIiOiI2ODAwYWRkZjJjODVlNzk2NjM5OTVjNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tKwPWvWKO7CaeWfn3cEVx4rVIVrO9MmprKQUQpxdOMs'
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0])
        }
      })
      .catch(err => console.error(err))
  }, [id])

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black px-4 py-6 sm:px-6'>
      <img
        onClick={() => navigate(-2)}
        className='absolute top-4 left-4 w-10 sm:w-12 cursor-pointer'
        src={back_icon}
        alt='back-icon'
      />

      <div className='w-full max-w-5xl aspect-video'>
        {apiData.key && (
          <iframe
            className='w-full h-full rounded-lg'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      <div className='mt-6 flex flex-row sm:flex-row sm:justify-between gap-3 text-white w-full max-w-5xl text-sm sm:text-base px-2'>
        <p>{apiData.published_at?.slice(0, 10) || 'Unknown date'}</p>
        <p className='text-center'>{apiData.name || 'Untitled'}</p>
        <p className='text-right'>{apiData.typeof || 'Type Unknown'}</p>
      </div>
    </div>
  )
}

export default Player
