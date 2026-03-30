import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainabout = () => {
    return (
        <div className='container-p text-white relative z-10 bg-black pt-10 pb-10 border-t border-gray-800/50'>
            <div className='w-full flex flex-col sm:flex-row sm:justify-between items-start'>
                
                
                <div className='mb-8 sm:mb-0'>
                    <div className='flex gap-3 sm:justify-start items-center'>
                     
                        <div className='h-2 w-2 bg-[#07C42C] shadow-[0px_0px_8px_2px_#07C42C] rounded-full animate-pulse'></div>
                        <p className='text-[10px] sm:text-xs font-bold tracking-[0.2em]'>WORKING GLOBALLY</p>
                    </div>
                </div>

                
                <div className='flex sm:w-2/3 w-full sm:justify-between justify-evenly sm:gap-0 gap-8 lg:pr-20 font-semibold'>
                
             
                    <div className='flex sm:gap-10 gap-3 flex-row justify-center sm:flex-nowrap flex-wrap'>
                        <p className='text-[10px] text-white-500 w-full mb-2 sm:mb-0'>SITEMAP</p>
                        <ul className='md:text-3xl text-xl leading-snug font-light'>
                            <li className='hover:text-[#07C42C] transition-colors duration-300'>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li className='hover:text-[#07C42C] transition-colors duration-300 cursor-pointer'>Works</li>
                            <li className='hover:text-[#07C42C] transition-colors duration-300 cursor-pointer'>Services</li>
                            <li className='hover:text-[#07C42C] transition-colors duration-300 cursor-pointer'>Contact</li>
                        </ul>
                    </div>

                  
                    <div className='flex gap-3 justify-center sm:gap-10 sm:flex-nowrap flex-wrap flex-row'>
                        <p className='text-[10px] text-white-500 w-full mb-2 sm:mb-0'>SOCIALS</p>
                        <ul className='md:text-3xl text-xl leading-snug font-light'>
                            <li className='hover:text-[#07C42C] transition-colors duration-300'>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter (X)</a>
                            </li>
                            <li className='hover:text-[#07C42C] transition-colors duration-300'>
                                <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
                            </li>
                            <li className='hover:text-[#07C42C] transition-colors duration-300'>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mainabout