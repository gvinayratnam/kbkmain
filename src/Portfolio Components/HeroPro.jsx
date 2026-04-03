import React from 'react'
import isobg from '../assets/images/isobg.png'
import wheel from '../assets/imagesabout/wheel.png'
import tweet from '../assets/imagesabout/span.each-object (1).png'
import rocket from '../assets/imagesabout/span.each-object.png'
import dot from '../assets/services/dot.png'
import sat from '../assets/services/sat.png'
import arrow from '../assets/services/arrow.png'


const HeroPro = () => {
    return (
        <div className='md:h-auto h-full w-full relative container-p sm:py-30  md:bg-contain bg-cover bg-right bg-black bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${isobg})` }}>
            <div className='lg:py-20 md:py-23 sm:py-20 py-20  h-full text-white  flex flex-col justify-center '>
                <div className='flex flex-col md:gap-10 gap-5 sm:pl-0 '>
                    <div className='relative  lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-bold tracking-wide '><span className='relative z-1 tracking-wide'>Portfolio <img className='absolute z-0 right-1 md:top-5 top-0 w-13' src={dot} alt="" /></span>

                    </div>
                    <div className='flex sm:flex-nowrap flex-wrap lg:gap-3'>
                        <div className='lg:w-1/10 lg:block hidden'></div>
                        <div className='lg:w-1/15 lg:py-[1%] md:block hidden'>
                            <div className='border border-gray-700 '></div>
                        </div>
                        <div className=''>
                            <p className='sm:text-md font-medium md:text-base text-sm tracking-wide w-1/2 text-[#999999]'>We’re designing digital experiences that enrich
                                human lives and it helps to grow your business
                                globally trends.</p>
                        </div>
                    </div>

                </div>

            </div>
            <img className='absolute sm:w-30 w-20 md:top-10 bottom-5 lg:left-[55%] md:left-[45%] right-0 animate-pulse -rotate-90 ' src={rocket} alt="" />

            <img className='absolute z-10 left-0 md:bottom-2 -bottom-3 animate-pulse md:w-35 w-22' src={wheel} alt="" />
            <img className='absolute md:top-[10%] md:left-[85%] top-[20%] left-[80%] w-[10%] rocket-float rotate-0' src={sat} alt="" />
        </div>
    )
}

export default HeroPro
