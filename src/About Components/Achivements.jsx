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
            year: 2023 // (added since missing)
        }
    ]
    return (
        <div className='sm:px-20 px-3 sm:py-20 py-10 bg-black text-white'>
            <div className='bg-[#151414] flex flex-col gap-10 lg:p-20 md:p-10 py-5 sm:py-0 rounded-2xl '>
                <div className='flex lg:flex-row flex-col items-start lg:gap-15 gap-10 px-5'>
                    <div className='w-1/2'>
                        <p className='text-[#07C42C] text-xs'>OUR ACHIEVEMENTS</p>
                        <h1 className='text-2xl tracking-widest relative leading-tight whitespace-nowrap truncate'>Budget-Friendly Plans Built For Every Business
                            without overspending or compromise. <span className='absolute inset-0  [background:linear-gradient(135deg,transparent_20%,#151414_80%)]'></span>

                        </h1>
                    </div>
                    <div className='flex flex-col  justify-start items-start gap-5'>
                        <p className='text-xs '>Our pricing ensures every business gets quality digital
                            without overspending or compromise.</p>
                        <div className=' rounded-full outline-none flex flex-row items-center justify-start gap-2 px-4  py-1 border border-[#07C42C] text-xs bg-white text-black cursor-pointer'>
                            <button className='cursor-pointer'>
                                <span className=''>Let's Get Started</span>
                            </button>
                            <div className='w-7 h-7 p-2 rounded-full relative bg-[#000000] flex items-center justify-end'>
                                <div className=' absolute bg-white w-1 h-1 top-1.5 left-3 rounded-full'></div>
                                <div className='bg-white w-1 h-1 rounded-full'></div>
                                <div className='absolute bg-white w-1 h-1 left-3 bottom-1.5 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  md:gap-10 gap-5 text-xs px-3'>
                    {
                        achievements.map(items => {
                            return (
                                <div className='flex flex-row  w-full justify-between 
                                 bg-[#24242440] rounded-lg px-5'>
                                    <div className='flex sm:w-full md:flex-row flex-col '>
                                        <div className='md:w-full min-w-15 py-2 sm:py-4 '> <p>{items.platform}</p></div>
                                        <div className='sm:w-full  py-2 sm:py-4'> <p>{items.title}</p></div>
                                    </div>
                                    <div className='flex sm:w-full md:flex-row flex-col text-right'>
                                        <div className='sm:w-full py-2 sm:py-4  md:text-center'> <p className=' w-32 sm:ml-auto  '>{items.location}</p></div>
                                        <div className='sm:w-full py-2 sm:py-4 md:text-right'> <p>{items.year}</p></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Achivements
