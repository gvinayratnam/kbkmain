import React from 'react'

const Achivements = () => {
    const achievements = [
        {
            platform: "Clutch",
            title: "Top Digital Marketing Agency Award",
            location: "San Francisco",
            year: 2012
        },
        {
            platform: "Behance",
            title: "Creative Excellence Recognition",
            location: "Berlin",
            year: 2016
        },
        {
            platform: "Dribbble",
            title: "Outstanding UI/UX Design Award",
            location: "New York",
            year: 2018
        },
        {
            platform: "Forbes",
            title: "Fast-Growing Digital Agency",
            location: "USA",
            year: 2019
        },
        {
            platform: "HubSpot",
            title: "Inbound Marketing Partner Award",
            location: "Sydney",
            year: 2021
        },
        {
            platform: "Adobe",
            title: "Innovation in Creative Solutions",
            location: "Toronto",
            year: 2023 
        }
    ]

    return (
        <div className='sm:px-20 px-3 sm:py-20 py-10 bg-black text-white'>
            <div className='bg-[#151414] flex flex-col gap-10 lg:p-20 md:p-10 py-10 rounded-2xl'>
                
                {/* Header Section */}
                <div className='flex lg:flex-row flex-col items-start lg:gap-15 gap-10 px-5'>
                    <div className='lg:w-1/2'>
                        <p className='text-[#07C42C] text-xs mb-2'>OUR ACHIEVEMENTS</p>
                        {/* Title: lg and up is large, below lg is h3 equivalent (text-2xl/3xl) */}
                        <h1 className='text-2xl md:text-3xl lg:text-5xl tracking-widest relative leading-tight'>
                            Budget-Friendly Plans Built For Every Business
                            <span className='absolute inset-0 [background:linear-gradient(135deg,transparent_20%,#151414_80%)]'></span>
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-5'>
                        <p className='text-xs text-gray-400'>
                            Our pricing ensures every business gets quality digital
                            without overspending or compromise.
                        </p>
                        <div className='rounded-full outline-none flex flex-row items-center justify-start gap-2 px-4 py-1 border border-[#07C42C] text-xs bg-white text-black cursor-pointer'>
                            <button className='cursor-pointer font-semibold'>
                                Let's Get Started
                            </button>
                            <div className='w-7 h-7 p-2 rounded-full relative bg-black flex items-center justify-end'>
                                <div className='absolute bg-white w-1 h-1 top-1.5 left-3 rounded-full'></div>
                                <div className='bg-white w-1 h-1 rounded-full'></div>
                                <div className='absolute bg-white w-1 h-1 left-3 bottom-1.5 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className='flex flex-col gap-4 text-xs px-3'>
                    {achievements.map((items, index) => (
                        <div 
                            key={index} 
                            className='grid grid-cols-2 md:grid-cols-4 items-center w-full bg-[#24242440] rounded-lg px-5 py-4 md:py-6 gap-y-2'
                        >
                     
                            <div className='flex flex-col md:block'>
                                <p className='text-gray-500 md:text-white uppercase md:normal-case'>{items.platform}</p>
                            </div>
                            
                            <div className='flex flex-col md:block'>
                                <p className='md:font-semibold text-xs md:text-base lg:text-md md:text-left text-right'>{items.title}</p>
                            </div>

                      
                            <div className='flex flex-col md:block md:text-center text-left  border-white/5 md:border-none pt-2 md:pt-0'>
                                <p className='text-gray-400'>{items.location}</p>
                            </div>

                            <div className='flex flex-col md:block text-right  border-white/5 md:border-none pt-2 md:pt-0'>
                                <p className='text-[#07C42C] font-mono text-sm md:text-base'>{items.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achivements