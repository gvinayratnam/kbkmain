import React from 'react'
import progress1 from '../assets/imagesabout/progress1.png'
import { IoDiamondOutline } from 'react-icons/io5'
import client from '../assets/imagesabout/client.png'
const Progress = () => {
    return (
        <div className='flex w-full border-b border-[#BFF7471A]/40 py-10  lg:flex-nowrap flex-wrap sm:justify-center sm:items-center container-p gap-5 bg-black text-white'>
            <div className='sm:w-2/5 overflow-hidden rounded-3xl'>
                <img className='w-full  object-contain h-full' src={progress1} alt="" />
            </div>
            <div className='flex lg:w-3/5 w-full gap-5 sm:flex-nowrap flex-wrap sm:p-5 sm:py-7'>
                <div className='flex flex-col justify-center sm:gap-10 gap-5 items'>
                    <p className='text-xl '>Where Strategy Meets
                        Stunning Design
                    </p>
                    <p className='sm:text-sm text-xs font-thin'>We collaborate with ambitious brands to
                        create data-driven digital strategies,
                        impactful campaigns, and drives
                    </p>
                    <div className='flex gap-2 font-thin'>
                        <div className=' flex items-center border border-[#BFF7471A]/40 rounded-xl justify-center bg-[#0B0B0B] p-4'>
                            <IoDiamondOutline className='text-3xl ' />
                        </div>
                        <div>
                            <p className='text-xl font'>Design Solutions</p>
                            <p className='sm:text-sm text-xs'>Crafting unique and creative
                                visual experiences.
                            </p>
                        </div>
                    </div>
                    <div className='border border-[#BFF7471A]/40'></div>
                    <div className='flex gap-2 font-thin'>
                        <div className=' flex rounded-xl items-center border border-[#BFF7471A]/40 justify-center bg-[#0B0B0B] p-4'>
                            <IoDiamondOutline className='text-3xl ' />
                        </div>
                        <div>
                            <p className='text-xl'>Collaborative Proces</p>
                            <p className='sm:text-sm text-xs'>Crafting unique and creative
                                visual experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex w-full md:1/3  flex-col gap-5 justify-between '>
                    <div className='bg-[#0B0B0B] flex sm:flex-col flex-row w-full flex-wrap justify-center gap-5 py-5 rounded-2xl'>
                        <div className='flex items-center justify-center flex-col'>
                            <div className=''><h1 className='text-center font-medium text-3xl sm:text-6xl'>20K</h1>
                            <p className='text-sm font-thin  sm:w-25'>Latest Projects
                                Completed</p></div>
                        </div>
                        <div className='flex w-full  items-center'>
                            <div className='border-b w-full border-gray-700/30'></div>
                            <div className=' w-full bg-red-900 h-1.5 rounded-xl'></div>
                            <div className='border-b w-full border-gray-700/30'></div>
                        </div>
                        <div className='flex items-center justify-center flex-col'>
                            <div className=''><h1 className='text-center font-medium text-3xl sm:text-6xl'>20K</h1>
                            <p className='text-sm font-thin  sm:w-25'>Latest Projects
                                Completed</p></div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center  flex-wrap sm:p-4 py-4 gap-2
                     rounded-full bg-[#0B0B0B] border border-[#BFF7471A]/40 '>
                        <img className='w-20' src={client} alt="" />
                        <span className='font-thin text-sm leading-loose'>Based on 204
                            Reviews</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Progress
