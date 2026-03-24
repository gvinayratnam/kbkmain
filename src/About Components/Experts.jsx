import React from 'react'
import bg1 from '../assets/aboutexperts/bg1.png'
import bg2 from '../assets/aboutexperts/bg2.png'
import p1 from '../assets/aboutexperts/p1.jpg'
import p12 from '../assets/aboutexperts/p12.png'
import p2 from '../assets/aboutexperts/p2.jpg'
import p3 from '../assets/aboutexperts/p3.jpg'
import bgmain from '../assets/aboutexperts/bgmain.png'
import bginmain from '../assets/aboutexperts/bginmain.png'
import com from '../assets/aboutexperts/Component 3.png'
import { FaStar } from 'react-icons/fa'
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2'



const teamMembers = [
    {
        id: 1,
        name: "Jane Cooper",
        role: "Flight engineer",
        image: p1
    },
    {
        id: 2,
        name: "Esther Howard",
        role: "Flight engineer",
        image: p2
    },
    {
        id: 3,
        name: "Darlene Robertson",
        role: "Flight engineer",
        image: p3
    }
]

const Experts = () => {
    return (
        <div className='sm:px-20 px-3 py-10 bg-black text-white'>
            <div className='flex lg:flex-row flex-col items-start lg:gap-15 gap-5 sm:px-5 overflow-hidden'>
                <div className='lg:w-1/2'>
                    <p className='text-[#07C42C] text-xs'>OUR EXPEARTS</p>
                    <h1 className='text-2xl md:text-4xl tracking-widest relative leading-tight whitespace-nowrap truncate'>Meet the creative minds behind our success <span className='absolute inset-0  [background:linear-gradient(135deg,transparent_20%,black_80%)]'></span>

                    </h1>
                </div>
                <div className='flex flex-col lg:w-1/3 justify-start items-start gap-5'>
                    <p className='text-xs '>Our pricing ensures every business gets quality digital
                        without overspending or compromise.</p>

                </div>
            </div>
            <div>
                <div className='flex w-full lg:justify-between justify-evenly lg:gap-5 gap-10 md:py-15 py-7 lg:flex-nowrap flex-wrap'>
                    <div className='relative lg:w-1/4 md:w-65 w-60  rounded-xl bg-center bg-cover overflow-hidden flex justify-center' style={{
                        backgroundImage: `url(${bg1})`
                    }}>
                        <div className='rounded-xl bg-[#242424]/50 inset-0 absolute'></div>
                        <div className='relative z-10 flex flex-col items-start justify-center h-50 sm:h-full'>
                            <p className='font-light '>Join Our Team</p>
                            <p className='font-semibold'>Start a Career With excellent</p>
                            <p className='font-semibold'>benefits</p>
                            <div className='rounded-full outline-none flex flex-row items-center justify-start gap-2 px-4  py-1 border border-[#07C42C] text-xs bg-white text-black cursor-pointer'>
                                <button className='cursor-pointer'>
                                    <span className=''>All Team Members</span>
                                </button>
                                <div className='w-7 h-7 p-2 rounded-full relative bg-[#000000] flex items-center justify-end'>
                                    <div className=' absolute bg-white w-1 h-1 top-1.5 left-3 rounded-full'></div>
                                    <div className='bg-white w-1 h-1 rounded-full'></div>
                                    <div className='absolute bg-white w-1 h-1 left-3 bottom-1.5 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        teamMembers.map(member => {
                            return (
                                <div className=' lg:w-1/4 md:w-65 w-60  relative'>
                                    <div className='rounded-xl'>
                                        <img className='w-full rounded-xl' src={member.image} alt="" />
                                    </div>
                                    <div className=' w-full flex justify-center absolute -bottom-[15%]'>
                                        <div className=' flex flex-col justify-center items-center w-[80%] py-2 rounded-xl bg-[#0B0B0B]'>
                                            <h3 className=''>{member.name}</h3>
                                            <p className='font-thin text-xs'>{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='lg:p-17 md:p-8 p-2 sm:py-2 py-6 bg-center bg-no-repeat bg-cover border border-[#3C3C3C] rounded-2xl mt-10' style={{
                backgroundImage: `url(${bgmain})`
            }}>
                <div className='flex w-full h-auto lg:gap-10 gap-5 items-center lg:flex-row flex-col justify-center sm:px-10 px-1'>
                    <div className='rounded-xl lg:w-2/6 h-full flex flex-col items-center overflow-hidden '>
                        <div className='bg-center bg-no-repeat bg-contain px-10' style={{
                            backgroundImage: `url(${bg2})`
                        }}>

                            <img className='lg:w-50  w-40' src={p12} alt="" />
                        </div>

                        <div className='flex flex-col w-full justify-center items-center  bg-white text-black gap-2 py-3'>
                            <h1 className='sm:text-5xl text-3xl'>4.7</h1>
                            <div className='flex '>
                                <FaStar className='fill-black' />
                                <FaStar className='fill-black' />
                                <FaStar className='fill-black' />
                                <FaStar className='fill-black' />
                                <FaStar className='fill-black' />

                            </div>
                            <p className='text-xs'>From 3k Members,</p>
                            <p className='text-xs'>
                                Reviewed by Google</p>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center  lg:w-4/6  bg-no-repeat  bg-top-right bg-black' style={{
                            backgroundImage: `url(${bginmain})`
                            }}>

                        <div className='border border-[#3C3C3C] sm:p-5 p-3 rounded-2xl w-full flex flex-col justify-between h-full gap-7'>
                            <div className='flex gap-2 '>
                                <img src={com} alt="" />
                            </div>
                            <p className='lg:w-5/6 leading-loose font-semibold md:text-lg sm:text-base text-xs text-[#8D8D8D]'>
                                Exceeded all expectations with their exceptional service and
                                expertise. Their dedication and professionalism made the entire
                                process seamless and rewarding. I highly recommend them for
                                outstanding results!
                            </p>
                            <div className='flex justify-between'>
                                <div>
                                    <h3>David Smith </h3>
                                    <p className='text-xs text-[#135BFF]'>Admin</p>
                                </div>
                                <div className='flex gap-4 justify-center items-center'>
                                    <div className='bg-[#00C950] rounded-full p-2'>
                                        <HiArrowSmallLeft className='fill-black' />
                                    </div>
                                    <div className='bg-[#00C950] rounded-full p-2'>
                                        <HiArrowSmallRight className='fill-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border h-2.5 w-[90%] bg-white' style={{
                            borderRadius:`0% 0% 50px 50px`
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experts
