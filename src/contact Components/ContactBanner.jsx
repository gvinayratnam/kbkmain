import React from 'react'
import astro from '../assets/port/astro.png'
const ContactBanner = () => {
    return (
        <div className='container-p bg-black'>
            <div className=" text-white sm:py-20 pt-10 flex flex-col gap-10">
                <div>
                    <p className='uppercase text-xs tracking-wider font-medium'>Contact</p>
                </div>
                <div className='flex lg:px-35 md:px-20  w-full relative'>
                    <div className='flex flex-col sm:gap-20 gap-10 w-full z-1'>
                        <h1 className='lg:text-7xl sm:text-5xl text-3xl'>Let’s drop us a line
                            and get the project
                            started.
                        </h1>
                        <div className='flex w-full md:flex-row flex-col md:items-center gap-5'>
                            <div className='lg:w-full md:w-60 w-40 flex flex-col gap-1'>
                                <p className='flex gap-1'> <span>+</span> Design</p>
                                <p className='flex gap-1'> <span>+</span> Development</p>
                                <p className='flex gap-1'> <span>+</span> Digital marketing</ p>
                                <p className='flex gap-1'> <span>+</span> Media Team</p>
                            </div>
                            <p className='w-full sm:text-base text-sm'>
                                We take a comprehensive approach to the creation and development of brands. We help local companies and services enter the market, and well-known brands expand an audience.
                            </p>
                        </div>

                    </div>
                    {/* <div className='absolute right-2 sm:right-10 top-0 -rotate-20 animate-bounce duration-1000 sm:w-55 w-40'>
                    <img src={astro} alt="" />
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
