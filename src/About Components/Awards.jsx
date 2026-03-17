import React from 'react'
import awards from '../assets/awrads/awards.png'
import client1 from '../assets/awrads/client-1.png'
// import client-2 from '../assets/awrads/client-2.png'
import client3 from '../assets/awrads/client-3.png'
import client4 from '../assets/awrads/client-4.png'
import client5 from '../assets/awrads/client-5.png'
import client6 from '../assets/awrads/client-l.png'


const Awards = () => {
    const images = [awards,client1,client3,client4,client5,client6]
  return (
    <div className='w-full sm:px-20 px-[3%] py-5 gap-8
     md:gap-18 lg:gap-25 flex justify-between items-center bg-black border-t border-b
      border-[#BFF7471A]'>
      {
        images.map(image=>{
            return(
                <div className=''>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default Awards
