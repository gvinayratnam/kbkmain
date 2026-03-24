import React from 'react'

const Mainabout = () => {
  return (
    <div className='container-p text-white relative z-10 bg-black py-1 sm:pt-10'>
                    <div className=' w-full flex flex-col sm:flex-row sm:justify-between'>
                        <div className=''>
                            <div className='flex gap-2 sm:justify-start mb-3 items-center '>
                                <div className='h-2 w-2 bg-[#07C42C] shadow-[0px_0px_3px_2px_#07C42C]  rounded-full'></div>
                                <p >WORKING GLOBALLY</p>
                            </div>
                        </div>
                        
                        <div className='flex sm:w-2/3 w-full sm:justify-between  justify-evenly sm:gap-0 gap-5 lg:pr-35'>
                            <div className='flex sm:gap-10 gap-3 flex-row  justify-center sm:flex-nowrap flex-wrap'>
                                <p className='text-xs w-full'>SITEMAP</p>
                                <ul className='md:text-3xl'>
                                    <li>About</li>
                                    <li>Works</li>
                                    <li>Services</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='flex  sm:gap-10 gap-3  justify-center sm:gap-10 sm:flex-nowrap flex-wrap flex-row'>
                                <p className='text-xs w-full'>
                                    SOCIALS
                                </p>
                                <ul className='md:text-3xl'>
                                    <li>Twitter (X)</li>
                                    <li>Dribbble</li>
                                    <li>LinkedIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Mainabout
