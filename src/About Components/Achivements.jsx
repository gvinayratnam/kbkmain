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
        <div className='container-p'>
            <div className='flex items-start gap-15'>
                <div>
                    <p className='text-[#07C42C] text-xs'>OUR ACHIEVEMENTS</p>
                    <h1 className='text-2xl tracking-widest '>Budget-Friendly Plans Built For Every Business</h1>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p>Our pricing ensures every business gets quality digital
                        without overspending or compromise.</p>
                    <div className=' rounded-full outline-none flex flex-row items-center justify-start gap-2 px-4 md:py-2 py-1 border border-[#07C42C] text-xs bg-[#B7B7B7] text-black'>
                        <button >
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
        </div>
    )
}

export default Achivements
