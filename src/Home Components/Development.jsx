import React, { useEffect, useState } from 'react'
import ash from '../assets/images/ash.png'
import mbl from '../assets/images/Image.png'
import digi3 from '../assets/images/digi3.jpg'
import ms from '../assets/images/ms.jpg'

import { GoArrowLeft, GoArrowRight } from 'react-icons/go'

const Development = () => {

    let [bgimage, setbgImage] = useState(0)
    let [fade, setFade] = useState(true)
    let [textFade, setTextFade] = useState(true)

    let bg = [mbl, digi3, ms]

    useEffect(() => {
        if (bgimage > bg.length - 1) {
            setbgImage(0)
        }
        if (bgimage < 0) {
            setbgImage(bg.length - 1)
        }
    }, [bgimage])

    const changeText = (index) => {
        setTextFade(false)

        setTimeout(() => {
            setbgImage(index)
            setTextFade(true)
        }, 150)
    }

    let prev = () => {
        setFade(false)
        setTextFade(false)

        setTimeout(() => {
            setbgImage(bgimage - 1)
            setFade(true)
            setTextFade(true)
        }, 200)
    }

    let next = () => {
        setFade(false)
        setTextFade(false)

        setTimeout(() => {
            setbgImage(bgimage + 1)
            setFade(true)
            setTextFade(true)
        }, 200)
    }

    return (
        <div className='container-p h-auto bg-black bg-contain w-full bg-center relative text-white'>

            <div className='h-full w-full relative z-10 flex flex-col md:gap-100 sm:gap-60 gap-40 sm:justify-between justify-between md:items-start items-start sm:py-10 px-2 '>
                <div>
                    <p className='text-xs text-[#FFFFFFA3] md:mb-10 md:p-1'>SELECTED WORKS</p>

                    <p
                        onClick={() => changeText(1)}
                        className={`sm:text-4xl text-2xl cursor-pointer font-semibold tracking-wider transform transition-all duration-300 ease-in-out
                        ${bgimage === 1 ? 'text-white ' : 'text-[#FFFFFF52]/70'}
                        ${textFade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        Digital Marketing
                    </p>

                    <p
                        onClick={() => changeText(0)}
                        className={`sm:text-5xl text-3xl cursor-pointer font-semibold md:my-3 transform transition-all duration-300 ease-in-out
                        ${bgimage === 0 ? 'text-white ' : 'text-[#FFFFFF52]/70'}
                        ${textFade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        Development
                    </p>

                    <p
                        onClick={() => changeText(2)}
                        className={`sm:text-4xl text-2xl cursor-pointer font-semibold tracking-wider transform transition-all duration-300 ease-in-out
                        ${bgimage === 2 ? 'text-white ' : 'text-[#FFFFFF52]/70'}
                        ${textFade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        Media Service
                    </p>
                </div>

                <div className='flex w-full md:flex-row flex-col justify-between  md:items-start'>

                    <div className='md:w-2/5 hidden md:flex flex-wrap md:justify-start gap-1 justify-center'>
                        <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-[10px] md:py-2 py-1'>WEBSITE DESIGN</button>
                        <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-[10px] md:py-2 py-1'>BRANDING</button>
                        <button className='rounded-3xl border md:px-6 px-3 cursor-pointer md:text-sm text-[10px] md:py-2 py-1'>VISUAL IDENTITY</button>
                    </div>

                    <div className='flex gap-20 md:w-2/5 text-xs sm:justify-center justify-evenly p-2 sm:pt-0 pt-0'>
                        <div onClick={prev} className='flex gap-2 cursor-pointer items-center'>
                            <GoArrowLeft /> <span>PREV</span>
                        </div>

                        <div onClick={next} className='flex gap-2 cursor-pointer items-center'>
                            <span>NEXT</span> <GoArrowRight />
                        </div>
                    </div>

                    <div className='md:w-2/5 text-center'>
                        <h1 className='md:text-7xl text-sm font-medium'>
                            20<span className='text-[#00C950]'>26</span>
                        </h1>
                    </div>
                </div>
            </div>

          
            <div className='absolute sm:w-auto w-2/3 h-full flex justify-end items-end bottom-[0%] right-[5%]'>
                <img
                    className={`w-full sm:h-[90%] h-[60%] object-contain transition-all duration-500 
                    ${fade ? 'opacity-100' : 'opacity-0'} 
                    ${bgimage === 1 ? '-translate-y-12.5' : 'translate-y-0'}`}
                    src={bg[bgimage]}
                    alt=""
                />
            </div>

        
            <div className='absolute bottom-[0%] left-0 w-full'>
                <img className='w-full' src={ash} alt="" />
            </div>

        </div>
    )
}

export default Development