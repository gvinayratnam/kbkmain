import React, { useState, useRef } from 'react';
import img1 from "../assets/services/img1.png"
import img2 from "../assets/services/img2.png"
import img3 from "../assets/services/img3.png"
import img4 from "../assets/services/img4.png"
import img5 from "../assets/services/img5.png"
import { GoArrowUpRight } from 'react-icons/go';

const services = [
    { id: 0, img: img1, color: "#00C950", title: "User paths or user flows functional models", description: "We design intuitive and user-friendly digital experiences that improve engagement and usability.", services: ["UX Research", "Website UI Design", "Mobile App UI Design", "UX Research", "Wireframing & Prototyping", "Product Interface Design"] },
    { id: 1, img: img2, color: "#3B82F6", title: "Web & Mobile Development", description: "We develop scalable websites and mobile applications tailored to business needs.", services: ["Business Website Development", "WordPress", "API Development", "Front End Development", "JavaScript", "Mobile App Development"] },
    { id: 2, img: img3, color: "#A855F7", title: "Branding & Creative Design", description: "We build powerful brand identities and creative visual solutions.", services: ["Logo Design", "Brand Identity Design", "Marketing Creatives", "Corporate Branding", "Visual Identity Design", "Creative Designs"] },
    { id: 3, img: img4, color: "#F97316", title: "Digital Marketing", description: "Our digital marketing services help businesses increase visibility, attract customers, and generate leads.", services: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Google Ads & PPC Campaigns", "Performance Marketing", "Lead Generation", "Creative Thinking"] },
    { id: 4, img: img5, color: "#EF4444", title: "Media Production & Content Creation", description: "We create professional media content that strengthens brand communication.", services: ["Promotional Videos", "Corporate Videos", "Product Photography", "Social Media Content", "Motion Graphics", "Content Creation"] }
];

const ServiceSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState(1);

    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const minSwipeDistance = 50;
    const slideHeightRem = 40; 

    const handleNavClick = (index) => {
        if (index === activeIndex || isTransitioning || index < 0 || index >= services.length) return;
        setDirection(index > activeIndex ? 1 : -1);
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 450);
    };

    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientY;
    };

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientY;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        if (distance > minSwipeDistance) handleNavClick(activeIndex + 1);
        else if (distance < -minSwipeDistance) handleNavClick(activeIndex - 1);
    };

    const currentColor = services[activeIndex].color;

    return (
        <div className='text-white w-full flex justify-center '>
            <div className='flex lg:flex-row flex-col bg-black h-160 w-full overflow-hidden relative lg:pl-10'>

                
                <div className='hidden lg:flex lg:w-64 flex-col justify-center gap-5 px-8 py-4 z-20 bg-black h-160'>
                    <h1 className='text-3xl font-semibold mb-4'>Services</h1>
                    <div className='flex flex-col gap-4'>
                        {services.map((item, idx) => (
                            <p
                                key={idx}
                                onClick={() => handleNavClick(idx)}
                                style={{ color: activeIndex === idx ? currentColor : '' }}
                                className={`cursor-pointer transition-all duration-300 text-sm xl:text-base ${activeIndex === idx ? 'translate-x-2' : 'text-gray-500 hover:text-gray-300'}`}
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col w-full relative h-160'>
                    
                    
                    <div className='hidden sm:flex flex-col gap-3 absolute right-[9%] top-1/2 -translate-y-1/2 z-30'>
                        {services.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleNavClick(idx)}
                                style={{ backgroundColor: activeIndex === idx ? currentColor : '#4b5563' }}
                                className={`w-1 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'h-8' : 'h-4'}`}
                            />
                        ))}
                    </div>

                    <div className='h-160 w-full overflow-hidden touch-none' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                        <div
                            className='flex w-full h-auto flex-col justify-center items-center transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateY(-${activeIndex * slideHeightRem}rem)` }}
                        >
                            {services.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex md:flex-row flex-col bg-black h-160 items-center px-6 md:px-10 py-4 md:gap-10 gap-2 shrink-0 transition-all duration-500 ${activeIndex === idx && !isTransitioning
                                        ? 'opacity-100 translate-y-0 '
                                        : `opacity-0 ${direction === 1 ? 'translate-y-20' : '-translate-y-20'}`
                                        }`}
                                >
                                    
                                    <div className='flex flex-col justify-center items-center h-[50%] md:h-auto w-full md:w-[30%] gap-4'>
                                        <div 
                                            style={{ 
                                                borderColor: item.color, 
                                                boxShadow: `0 10px 25px -5px ${item.color}4d` 
                                            }}
                                            className='lg:min-w-70 max-w-full md:max-w-110 border py-7 md:py-12 rounded-xl transition-all duration-500'
                                        >
                                            <img
                                                className="w-full h-40 md:h-auto object-contain px-4"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </div>

                                      
                                        <div className='flex sm:hidden flex-row gap-3 z-30 justify-center'>
                                            {services.map((_, barIdx) => (
                                                <div
                                                    key={barIdx}
                                                    onClick={() => handleNavClick(barIdx)}
                                                    style={{ backgroundColor: activeIndex === barIdx ? currentColor : '#4b5563' }}
                                                    className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === barIdx ? 'w-8' : 'w-4'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                  
                                    <div className='w-full  md:w-[60%] flex flex-col justify-start items-start gap-4 md:gap-10 h-[50%] md:h-auto overflow-y-auto no-scrollbar'>
                                        <div className='lg:w-[85%]  flex flex-col items-start gap-3 md:gap-7'>
                                            <h1 className='lg:text-4xl md:text-3xl text-lg tracking-tight leading-tight font-semibold'>{item.title}</h1>
                                            <p className='md:text-lg text-xs leading-relaxed text-gray-400'>{item.description}</p>

                                            <ul className='grid grid-cols-2 gap-y-3 gap-x-8 md:gap-y-5 list-outside pl-5 text-[10px] md:text-base'>
                                                {item.services.map((lis, sIdx) => (
                                                    <li key={sIdx} style={{ color: item.color }} className="list-disc">
                                                        <span className='text-white'>{lis}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className='border bg-black shadow-[inset_0px_0px_16px_0px_gray,0px_0px_2px_1px_black] border-gray-700 sm:text-xs text-[9px] rounded-full cursor-pointer sm:w-20 sm:h-20 w-15 h-15 flex items-center justify-center text-center'>
                                                Get free <br/> quotes 
                                                <GoArrowUpRight 
                                                    style={{ color: item.color }} 
                                                    className='ml-1' 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;