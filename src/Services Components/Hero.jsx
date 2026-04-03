import React from 'react'
import isobg from '../assets/images/isobg.png'
import wheel from '../assets/imagesabout/wheel.png'
import tweet from '../assets/imagesabout/span.each-object (1).png'
import rocket from '../assets/imagesabout/span.each-object.png'
import dot from '../assets/services/dot.png'
import sat from '../assets/services/sat.png'
import arrow from '../assets/services/arrow.png'


const Hero = () => {
    return (
        <div className='md:h-auto h-full w-full relative container-p sm:py-30  md:bg-contain bg-cover bg-right bg-black bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${isobg})` }}>
            <div className='lg:py-20 md:py-23 sm:py-20 py-30  h-full text-white  flex flex-col justify-center '>
                <div className='flex flex-col gap-10 sm:pl-0 '>
                    <div className='relative  lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-bold tracking-wide '><span className='relative z-1'>Digital Solution</span>
                    <img className='absolute z-0 lg:left-170 md:left-125 lg:-top-4 -top-8' src={dot} alt="" /> </div>
                    <div className='flex sm:flex-nowrap flex-wrap gap-3 '>
                        <div className='lg:w-1/3'></div>
                        <div className='lg:w-1/9 lg:py-[1%]'>
                            <div className='border border-gray-700 '></div>
                        </div>
                        <div className=''>
                            <p className='sm:text-md text-sm'>We’re designing digital experiences that enrich <br />
                                human lives and it helps to grow your <br /> business
                                globally trends.</p>
                        </div>
                    </div>
                
                </div>
                 <div className='absolute bottom-10 right-[10%]  flex sm:gap-10 gap-3 text-xs sm:text-base sm:font-medium font-thin'>
                        <p>Approach</p>
                        <p>Creativity</p>
                        <p>Experienced</p>
                    </div>
            </div>
            <img className='absolute right-[20%] bottom-[15%] sm:w-15 w-10' src={arrow} alt="" />
            <img className='absolute z-10 left-0 md:bottom-2 -bottom-3 animate-pulse md:w-35 w-22' src={wheel} alt="" />
            <img className='absolute md:top-[10%] md:left-[80%] top-[20%] left-[80%] w-[15%] rocket-float rotate-0' src={sat} alt="" />
        </div>
    )
}

export default Hero
