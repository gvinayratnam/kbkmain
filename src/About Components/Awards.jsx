import React, { useEffect, useRef, useState } from 'react'
import awards from '../assets/awrads/awards.png'
import client1 from '../assets/awrads/client-1.png'
import client3 from '../assets/awrads/client-3.png'
import client4 from '../assets/awrads/client-4.png'
import client5 from '../assets/awrads/client-5.png'
import client6 from '../assets/awrads/client-l.png'

const Awards = () => {
  const images = [awards, client1, client3, client4, client5, client6]
  const size = 6 
  const grouped = []
  for (let i = 0; i < images.length; i += size) {
    grouped.push(images.slice(i, i + size))
  }
  const slides = [grouped[grouped.length - 1], ...grouped, grouped[0]]
  const [current, setCurrent] = useState(1)
  const [isAnimating, setAnimating] = useState(true)
  const intervalRef = useRef(null)

 
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => prev + 1)
    }, 3000)

    return () => clearInterval(intervalRef.current)
  }, [])


  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setAnimating(false)
        setCurrent(1)
      }, 500)
    }

    if (current === 0) {
      setTimeout(() => {
        setAnimating(false)
        setCurrent(grouped.length)
      }, 500)
    }
  }, [current, slides.length, grouped.length])

  useEffect(() => {
    if (!isAnimating) {
      const t = setTimeout(() => setAnimating(true), 50)
      return () => clearTimeout(t)
    }
  }, [isAnimating])

  return (
    <div className='w-full overflow-hidden bg-black border-t border-b border-[#BFF7471A] py-6'>

      <div
        className='flex'
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease' : 'none'
        }}
      >
        {slides.map((group, index) => (
          <div key={index} className='min-w-full flex justify-between px-4'>
            {group.map((img, i) => (
              <img
                key={i}
                src={img}
                className='h-10 sm:h-12 w-auto object-contain'
                alt=""
              />
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Awards