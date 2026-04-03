import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [bar, setBar] = useState(false)

    useEffect(() => {
        document.body.style.overflow = bar ? "hidden" : "auto"
    }, [bar])

    return (
        <>
        
            <div className='w-full hidden sm:block h-16 bg-linear-to-r from-[#242424]/90 to-[#111111]/90 fixed top-0 z-100 backdrop-blur-md border-b border-white/5'>
                <div className='h-full max-w-7xl mx-auto flex items-center justify-center gap-12 text-white font-medium'>
                    <NavLink to={'/'} className={({ isActive }) => `cursor-pointer transition-colors hover:text-[#00C950] ${isActive ? 'text-[#00C950]' : ''}`}>Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => `cursor-pointer transition-colors hover:text-[#00C950] ${isActive ? 'text-[#00C950]' : ''}`}>About</NavLink>
                    <NavLink to={'/service'} className={({ isActive }) => `cursor-pointer transition-colors hover:text-[#00C950] ${isActive ? 'text-[#00C950]' : ''}`}>Services</NavLink>
                    <NavLink to={'/portfolio'} className={({ isActive }) => `cursor-pointer transition-colors hover:text-[#00C950] ${isActive ? 'text-[#00C950]' : ''}`}>Portfolio</NavLink>
                    {/* <div className='cursor-pointer hover:text-[#00C950] transition-colors'>Portfolio</div> */}
                     <NavLink to={'/contact'} className={({ isActive }) => `cursor-pointer transition-colors hover:text-[#00C950] ${isActive ? 'text-[#00C950]' : ''}`}>Contact</NavLink>
                </div>
            </div>

           
            <div className='sm:hidden block text-white'>
             
                <div className='h-16 px-5 flex items-center justify-between bg-linear-to-r from-[#242424] to-[#111111] fixed top-0 z-90 w-full border-b border-white/5'>
                    <span className='font-bold text-lg tracking-tight'>Kbk</span>
                    <span className='text-2xl cursor-pointer' onClick={() => setBar(!bar)}>
                        <FaBars />
                    </span>
                </div>

               
                <div className={`fixed inset-0 z-110 transition-all duration-300 ${bar ? "visible" : "invisible"}`}>
                   
                    <div 
                        onClick={() => setBar(false)} 
                        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${bar ? "opacity-100" : "opacity-0"}`} 
                    />

                 
                    <div className={`absolute left-0 top-0 w-[75%] h-full bg-[#111111] transform transition-transform duration-300 ease-in-out ${bar ? "translate-x-0" : "-translate-x-full"}`}>
                        
                        
                        <div className='flex justify-between items-center p-6 border-b border-white/5'>
                            <span className='text-xl font-bold tracking-widest'>MENU</span>
                            <span className='text-2xl cursor-pointer' onClick={() => setBar(false)}>
                                <RxCross1 />
                            </span>
                        </div>

                      
                        <div className='flex flex-col gap-6 p-8 text-xl font-light'>
                            <NavLink onClick={() => setBar(false)} to={'/'} className={({ isActive }) => isActive ? 'text-[#00C950]' : ''}>Home</NavLink>
                           
                             <NavLink onClick={() => setBar(false)} to={'/about'} className={({ isActive }) => isActive ? 'text-[#00C950]' : ''}>About</NavLink>
                             <NavLink onClick={() => setBar(false)} to={'/service'} className={({ isActive }) => isActive ? 'text-[#00C950]' : ''}>Services</NavLink>
                            <NavLink onClick={() => setBar(false)} to={'/portfolio'} className={({ isActive }) => isActive ? 'text-[#00C950]' : ''}>Portfolio</NavLink>
                            <div className='cursor-pointer'>Contact</div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className='h-16 bg-black'></div>
        </>
    )
}

export default NavBar