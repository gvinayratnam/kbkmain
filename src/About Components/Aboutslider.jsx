import React, { useEffect, useRef, useState } from 'react'
import img1 from '../assets/sliderimg/img1.png'
import img2 from '../assets/sliderimg/img2.jpg'
import img3 from '../assets/sliderimg/img3.jpg'
import img4 from '../assets/sliderimg/img4.jpg'
import img5 from '../assets/sliderimg/img5.jpg'
import img6 from '../assets/sliderimg/img6.jpg'
import img7 from '../assets/sliderimg/img7.jpg'
import img8 from '../assets/sliderimg/img8.jpg'
import be from '../assets/sliderimg/be.jpg'
import bg from '../assets/sliderimg/bg.png'
import { FiPhoneCall } from 'react-icons/fi'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const Aboutslider = () => {
    const [current, setCurrent] = useState(1)
    const [isAnimating, setAnimating] = useState(true)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
    const autoSlideRef = useRef(null)
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    useEffect(() => {
        setCurrent(1)
    }, [isDesktop])
    const size = isDesktop ? 4 : 1
    let arrImages = []

    for (let i = 0; i < images.length; i += size) {
        arrImages.push(images.slice(i, i + size))
    }
    const last_slide = arrImages.length - 1

    const extendedSlides = [
        arrImages[last_slide],
        ...arrImages,
        arrImages[0]
    ]

    useEffect(() => {
        if (current === last_slide + 2) {
            setTimeout(() => {
                setAnimating(false)
                setCurrent(1)
            }, 600)
        }
    }, [current, last_slide])

    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(() => setAnimating(true), 50)
            return () => clearTimeout(timer)
        }
    }, [isAnimating])

    useEffect(() => {
        autoSlideRef.current = setInterval(() => {
            setCurrent(prev => prev + 1)
        }, 4000)

        return () => clearInterval(autoSlideRef.current)
    }, [])

    const goToSlide = (index) => {
        clearInterval(autoSlideRef.current)

        setAnimating(true)
        setCurrent(index + 1)

        autoSlideRef.current = setInterval(() => {
            setCurrent(prev => prev + 1)
        }, 4000)
    }

    const activeIndex =
        current === 0
            ? arrImages.length - 1
            : current === arrImages.length + 1
                ? 0
                : current - 1

    return (
        <div className= 'relative container-p bg-black text-white sm:py-10' >
            <img className='absolute -bottom-[0%]  left-[20%] w-[50%]  object-contain' src={bg} alt="" />
            <div className='flex flex-col items-center sm:mb-10 mb-5'>
                <p className='text-[#07C42C] text-xs font-thin mb-2'>RECENT WORKS</p>
                <p className='relative sm:leading-loose leading-tight tracking-widest sm:text-2xl text-xl'>
                    Projects That Turn Ideas Into Powerful Results
                    <span className='absolute inset-0 [background:linear-gradient(135deg,transparent_30%,#000_55%)]'></span>
                </p>
            </div>
            <div className='overflow-hidden'>
                <div
                    className='flex will-change-transform items-center'
                    style={{
                        transform: isDesktop
                            ? `translate3d(-${current * 100}%,0,0)`
                            : `translate3d(-${current * 80}%,0,0)`,
                        transition: isAnimating ? "transform 0.6s ease" : "none"
                    }}
                >
                    {extendedSlides.map((group, index) => (
                        <div
                            key={index}
                            className={`flex ${isDesktop ? "min-w-full justify-between" : "min-w-[80%] justify-center"} px-2`}
                        >
                            {group.map((image, i) => (
                                <img
                                    key={i}
                                    src={image}
                                    alt=""
                                    className={`${isDesktop ? "w-[24%]" : "w-full"} rounded-3xl object-cover`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex relative z-10 justify-center items-center gap-3 mt-6'>
                {arrImages.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className='h-2 rounded-full transition-all duration-300 cursor-pointer'
                        style={{
                            width: idx === activeIndex ? "25px" : "8px",
                            backgroundColor: idx === activeIndex ? "#07C42C" : "gray"
                        }}
                    />
                ))}
            </div>
            <div className='flex relative z-10 items-center gap-5 justify-center md:py-20 py-10  w-full  bg-center bg-no-repeat bg-contain '>
                 {/* style={{ backgroundImage: `url(${bg})` }} */}
                {/* <img src={bg} alt="" /> */}
                <div className='relative'>
                    <img src={be} className='w-6 rounded-full' alt="" />
                    <div className='absolute -top-2 h-4 -right-2 p-1 bg-[#07C42C] rounded-full flex items-center justify-center'>
                        <FiPhoneCall className='w-2 fill-black stroke-0' />
                    </div>
                </div>

                <p className='text-xs w-46'>
                    Let's make something great work together.
                </p>

                <p className='text-[#07C42C] font-thin text-sm'>
                    Get Free Quote
                </p>
            </div>
        </div>
    )
}

export default Aboutslider