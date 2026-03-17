import React from 'react'
import p1 from '../assets/skillimages/p1.png'
import p2 from '../assets/skillimages/p2.jpg'
import p3 from '../assets/skillimages/p3.jpg'
import figma from '../assets/skillimages/Figma.png'
import adobe from '../assets/skillimages/Adobe_XD.png'
import Photoshop from '../assets/skillimages/Photoshop.png'
import Skatch from '../assets/skillimages/Skatch.png'
import Invision from '../assets/skillimages/Invision.png'
import Illustrator from '../assets/skillimages/Illustrator.png'
import bg from "../assets/skillimages/bg.png"

const skills = [
    [
        {
            image: p1,
            name: "",
        },
        {
            id: 1,
            name: "Figma",
            image: figma
        },
        {
            id: 2,
            name: "Adobe XD",
            image: adobe
        }
    ],
    [
        {
            id: 3,
            name: "Photoshop",
            image: Photoshop
        },
        {
            image: p2,
            name: "",
        },
        {
            id: 4,
            name: "Skatch",
            image: Skatch
        }
    ],
    [
        {
            image: p1,
            name: "",
        },
        {
            id: 5,
            name: "Invision",
            image: Invision
        },
        {
            id: 6,
            name: "Illustrator",
            image: Illustrator
        }

    ]
]

const Skill = () => {
    return (
        <div
            className="relative text-white bg-black container-p flex md:flex-row flex-col lg:gap-10 md:gap-5 gap-3 py-20 bg-conatin bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* <img className='absolute -top-30 left-0 object-fit' src={bg} alt="" /> */}
            <div className='relative md:w-1/2 w-full flex flex-col justify-between gap-10 lg:text-5xl md:text-3xl text-xl'>

                <div>
                    <h3 className='text-[#BFF747] text-sm uppercase'> our skill</h3>
                    <h1 className='relative  tracking-wider py-1  md:p-2'>Innovating Through
                        <span className='absolute inset-0  [background:linear-gradient(135deg,transparent_40%,#000_70%)]'></span>
                    </h1>
                    <h1 className='relative  tracking-wider  md:p-2 py-1 md:pl-10'>
                        Expertise
                        <span className='absolute inset-0  [background:linear-gradient(90deg,transparent_10%,#000_30%)]'></span>
                    </h1>
                </div>
                <div className='relative w-full lg:text-2xl font-semibold sm:text-lg text-base h-50 md:h-58 lg:h-70 '>
                    <div className='bg-[#07C42C] rounded-xl md:rounded-2xl text-black w-[70%] flex justify-between items-center lg:py-5 py-3  px-3 absolute top-[0%]'>
                        <span>UI / UX design</span><span>70%</span>
                    </div>
                    <div className='bg-[#F6F6F6] rounded-xl md:rounded-2xl text-black w-[80%] flex justify-between items-center lg:py-5 py-3  px-3 absolute lg:top-[24%] top-[22%]'>
                        <span>Apps Development</span><span>80%</span>
                    </div>
                    <div className='bg-[#242424] rounded-xl md:rounded-2xl w-[90%] flex justify-between items-center lg:py-5 py-3  px-3 absolute lg:top-[48%] top-[45%]'>
                        <span>Web Development</span><span>90%</span>
                    </div>
                    <div className='bg-[#0B0B0B] rounded-xl md:rounded-2xl w-full flex justify-between items-center lg:py-5 py-3  px-3 absolute lg:top-[73%] top-[68%]'>
                        <span>Cloud Solution</span><span>100%</span>
                    </div>
                </div>

            </div>
            <div className='border-r border-gray-600/50 md:block hidden'>

            </div>
            <div className=' md:w-1/2 w-full flex flex-col justify-center gap-5 '>
                {
                    skills.map((items, idx) => {
                        return (
                            <div className=' flex justify-between w-ful md:text-base text-sm gap-3'>
                                {items.map((arr, id) => {
                                    return (
                                        <div className='flex flex-col items-center justify-center w-full'>
                                            <img className={` ${idx === 1 && id === 1 ? "rounded-full" : ""} ${arr.name === "" ? "w-[50%]" : "w-[30%]"} `} src={arr.image} alt="" />
                                            <span>{arr.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill
