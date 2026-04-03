import React, { useState, useEffect } from 'react'
import bg1 from '../assets/aboutexperts/bg1.png'
import bg2 from '../assets/aboutexperts/bg2.png'
import p1 from '../assets/aboutexperts/p1.jpg'
import p12 from '../assets/aboutexperts/p12.png'
import p22 from '../assets/aboutexperts/p22.png'
import p33 from '../assets/aboutexperts/p33.png'
import p2 from '../assets/aboutexperts/p2.jpg'
import p3 from '../assets/aboutexperts/p3.jpg'
import bgmain from '../assets/aboutexperts/bgmain.png'
import bginmain from '../assets/aboutexperts/bginmain.png'
import com from '../assets/aboutexperts/Component 3.png'
import { FaStar } from 'react-icons/fa'
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2'

const teamMembers = [
    { id: 1, name: "Jane Cooper", role: "Flight engineer", image: p1 },
    { id: 2, name: "Esther Howard", role: "Flight engineer", image: p2 },
    { id: 3, name: "Darlene Robertson", role: "Flight engineer", image: p3 },
    { id: 4, name: "John Doe", role: "Flight engineer", image: p1 },
    { id: 5, name: "Sarah Smith", role: "Flight engineer", image: p2 },
]

const expertTestimonials = [
    {
        id: 1,
        image: p12,
        name: "Jane Cooper",
        role: "Flight engineer",
        rating: "4.7",
        members: "3k",
        platform: "Google",
        review: "Exceeded all expectations with their exceptional service and expertise. Their dedication and professionalism made the entire process seamless and rewarding. I highly recommend them for outstanding results!"
    },
    {
        id: 2,
        image: p22,
        name: "Esther Howard",
        role: "Lead Developer",
        rating: "4.9",
        members: "2.5k",
        platform: "Trustpilot",
        review: "Delivered an incredible experience through their innovative approach and strategic thinking. Their commitment and attention to detail ensured every milestone was met perfectly. I strongly suggest them!"
    },
    {
        id: 3,
        image: p33,
        name: "Darlene Robertson",
        role: "Creative Director",
        rating: "4.8",
        members: "4k",
        platform: "Clutch",
        review: "Provided a fantastic solution that perfectly aligned with our core business goals. Their creativity and technical skills transformed our vision into reality. I absolutely endorse their work!"
    }
];

const Experts = () => {

    const [indexNo, setIndexNo] = useState(0)
    const [teamIndex, setTeamIndex] = useState(0);
    const [sliderItemsToShow, setSliderItemsToShow] = useState(3);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setSliderItemsToShow(3);
            else if (window.innerWidth >= 768) setSliderItemsToShow(2);
            else setSliderItemsToShow(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxTeamIndex = teamMembers.length - sliderItemsToShow;

    useEffect(() => {
        const teamInterval = setInterval(() => {
            setTeamIndex((prev) => (prev >= maxTeamIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(teamInterval);
    }, [maxTeamIndex]);

    useEffect(() => {
        const testimonialInterval = setInterval(() => {
            setIndexNo((prev) => (prev === expertTestimonials.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(testimonialInterval);
    }, []);

    const handlePrev = () => setIndexNo((prev) => (prev === 0 ? expertTestimonials.length - 1 : prev - 1));
    const handleNext = () => setIndexNo((prev) => (prev === expertTestimonials.length - 1 ? 0 : prev + 1));


    return (
        <div className='sm:px-20 px-3 py-10 bg-black text-white'>

            <div className='flex lg:flex-row flex-col items-start lg:gap-15 gap-5 sm:px-5 overflow-hidden'>
                <div className='lg:w-1/2'>
                    <p className='text-[#07C42C] text-xs'>OUR EXPERTS</p>
                    <h1 className='text-2xl md:text-4xl tracking-widest relative leading-tight whitespace-nowrap truncate'>
                        Meet the creative minds behind our success
                        <span className='absolute inset-0 [background:linear-gradient(135deg,transparent_20%,black_80%)]'></span>
                    </h1>
                </div>
                <div className='flex flex-col lg:w-1/3 justify-start items-start gap-5'>
                    <p className='text-xs '>Our pricing ensures every business gets quality digital without overspending or compromise.</p>
                </div>
            </div>

            <div className='mt-10'>
                <div className='flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 md:h-72 w-full'>
                    <div className='w-60 md:w-1/3 lg:w-1/4 h-60 md:h-full md:pr-4 lg:pr-5'>
                        <div className='relative w-full h-full md:h-[90%] rounded-xl bg-center bg-cover flex justify-center overflow-hidden' style={{ backgroundImage: `url(${bg1})` }}>
                            <div className='rounded-xl bg-[#242424]/50 inset-0 absolute'></div>
                            <div className='relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-3 lg:px-5 w-full'>
                                <p className='font-light text-sm md:text-sm lg:text-base text-white'>Join Our Team</p>
                                <p className='font-semibold text-base md:text-sm lg:text-base text-white leading-tight mt-1'>Start a Career With excellent</p>
                                <p className='font-semibold text-base md:text-sm lg:text-base text-white'>benefits</p>
                                <div className='rounded-full outline-none flex flex-row items-center justify-start gap-2 px-4 py-2 md:py-1 border border-[#07C42C] mt-4 md:mt-2 bg-white text-black'>
                                    <button className='cursor-pointer text-xs sm:text-sm md:text-xs whitespace-nowrap'>
                                        <span>All Team Members</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative overflow-hidden w-60 md:w-2/3 lg:w-3/4 h-72 md:h-full pb-8'>
                        <div
                            className='flex h-full transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${teamIndex * (100 / sliderItemsToShow)}%)` }}
                        >
                            {teamMembers.map(member => (
                                <div key={member.id} className='h-full shrink-0 px-2 md:px-3 lg:px-4' style={{ width: `${100 / sliderItemsToShow}%` }}>
                                    <div className='relative h-[90%] w-full group'>
                                        <div className='rounded-xl h-full overflow-hidden'>
                                            <img className='w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110' src={member.image} alt={member.name} />
                                        </div>
                                        <div className='w-full flex justify-center absolute -bottom-6 z-20'>
                                            <div className='flex flex-col justify-center items-center w-[90%] md:w-[85%] py-2 rounded-xl bg-[#0B0B0B] text-white shadow-lg border border-[#3C3C3C]'>
                                                <h3 className='text-sm md:text-sm lg:text-base font-semibold truncate px-1'>{member.name}</h3>
                                                <p className='font-thin text-xs md:text-[10px] lg:text-xs text-[#07C42C]'>{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='absolute bottom-1 w-full flex justify-center gap-2'>
                            {Array.from({ length: maxTeamIndex + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setTeamIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${teamIndex === idx ? 'w-6 bg-[#07C42C]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:p-17 md:p-8 p-2 sm:py-2 py-6 bg-center bg-no-repeat bg-cover border border-[#3C3C3C] rounded-2xl mt-16' style={{ backgroundImage: `url(${bgmain})` }}>
                <div className='flex w-full h-auto lg:gap-10 gap-5 items-center lg:flex-row flex-col justify-center sm:px-10 px-1 '>

                    <div className='rounded-xl lg:w-2/6 h-full flex flex-col items-center overflow-hidden '>
                        <div className='bg-center bg-no-repeat bg-contain ' style={{ backgroundImage: `url(${bg2})` }}>
                            <div className='overflow-hidden w-60 lg:w-65'>
                                <div
                                    className='flex transition-transform w-60 lg:w-65 duration-500 ease-in-out '
                                    style={{ transform: `translateX(-${indexNo * 100}%)` }}
                                >
                                    {expertTestimonials.map((expert) => (
                                        <img key={`img-${expert.id}`} className=' object-cover shrink-0' src={expert.image} alt={expert.name} />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='overflow-hidden w-full bg-white'>
                            <div
                                className='flex transition-transform duration-500 ease-in-out'
                                style={{ transform: `translateX(-${indexNo * 100}%)` }}
                            >
                                {expertTestimonials.map((expert) => (
                                    <div key={expert.id} className='w-full shrink-0 flex flex-col justify-center items-center text-black gap-2 py-3'>
                                        <h1 className='sm:text-5xl text-3xl'>{expert.rating}</h1>
                                        <div className='flex'>
                                            <FaStar className='fill-black' />
                                            <FaStar className='fill-black' />
                                            <FaStar className='fill-black' />
                                            <FaStar className='fill-black' />
                                            <FaStar className='fill-black' />
                                        </div>
                                        <p className='text-xs'>From {expert.members} Members,</p>
                                        <p className='text-xs'>Reviewed by {expert.platform}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center lg:w-4/6 bg-no-repeat bg-top-right bg-black' style={{ backgroundImage: `url(${bginmain})` }}>
                        <div className='border border-[#3C3C3C] sm:p-5 p-3 rounded-2xl w-full flex flex-col justify-between h-full gap-7 relative'>
                            <div className='flex gap-2 '>
                                <img src={com} alt="" />
                            </div>

                            <div className='overflow-hidden lg:w-5/6 pb-4'>
                                <div
                                    className='flex transition-transform duration-500 ease-in-out'
                                    style={{ transform: `translateX(-${indexNo * 100}%)` }}
                                >
                                    {expertTestimonials.map((expert) => (
                                        <div key={`text-${expert.id}`} className='w-full shrink-0'>
                                            <p className='leading-loose font-semibold md:text-lg sm:text-base text-xs text-[#8D8D8D]'>
                                                {expert.review}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-between items-end'>
                                <div>
                                    <h3>{expertTestimonials[indexNo].name}</h3>
                                    <p className='text-xs text-[#135BFF]'>{expertTestimonials[indexNo].role || 'Expert'}</p>
                                </div>
                                <div className='flex gap-4 justify-center items-center'>
                                    <button className='bg-[#00C950] rounded-full p-2 cursor-pointer hover:bg-green-600 transition-colors' onClick={handlePrev}>
                                        <HiArrowSmallLeft className='fill-black' />
                                    </button>
                                    <button className='bg-[#00C950] rounded-full p-2 cursor-pointer hover:bg-green-600 transition-colors' onClick={handleNext}>
                                        <HiArrowSmallRight className='fill-black' />
                                    </button>
                                </div>
                            </div>

                            <div className='absolute bottom-2 left-0 w-full flex justify-center gap-2'>
                                {expertTestimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setIndexNo(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${indexNo === idx ? 'w-6 bg-[#00C950]' : 'w-2 bg-gray-600 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='border h-2.5 w-[90%] bg-white' style={{ borderRadius: `0% 0% 50px 50px` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experts