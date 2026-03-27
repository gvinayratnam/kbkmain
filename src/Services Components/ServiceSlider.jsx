import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/services/img1.png"
import img2 from "../assets/services/img2.png"
import img3 from "../assets/services/img3.png"
import img4 from "../assets/services/img4.png"
import img5 from "../assets/services/img5.png"

const services = [
    { id: 0, img: img1, title: "User paths or user flows functional models", description: "We design intuitive and user-friendly digital experiences that improve engagement and usability.", services: ["UX Research", "Website UI Design", "Mobile App UI Design", "UX Research", "Wireframing & Prototyping", "Product Interface Design"] },
    { id: 1, img: img2, title: "Web & Mobile Development", description: "We develop scalable websites and mobile applications tailored to business needs.", services: ["Business Website Development", "WordPress", "API Development", "Front End Development", "JavaScript", "Mobile App Development"] },
    { id: 2, img: img3, title: "Branding & Creative Design", description: "We build powerful brand identities and creative visual solutions.", services: ["Logo Design", "Brand Identity Design", "Marketing Creatives", "Corporate Branding", "Visual Identity Design", "Creative Designs"] },
    { id: 3, img: img4, title: "Digital Marketing", description: "Our digital marketing services help businesses increase visibility, attract customers, and generate leads.", services: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Google Ads & PPC Campaigns", "Performance Marketing", "Lead Generation", "Creative Thinking"] },
    { id: 4, img: img5, title: "Media Production & Content Creation", description: "We create professional media content that strengthens brand communication.", services: ["Promotional Videos", "Corporate Videos", "Product Photography", "Social Media Content", "Motion Graphics", "Content Creation"] }
];

const ServiceSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState(1); 

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = (index) => {
        if (index === activeIndex || isTransitioning) return;

        setDirection(index > activeIndex ? 1 : -1);
        setIsTransitioning(true);
        setActiveIndex(index);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 450); 
    };

    return (
        <div className='py-10 text-white flex justify-center'>
            <div className='flex sm:flex-row flex-col bg-black sm:h-160 h-auto w-full  overflow-hidden'>
                <div className='sm:w-50 sm:text-md text-sm flex flex-col sm:justify-center justify-evenly gap-5 px-5 py-4 z-20 bg-black'>
                    <h1 className='text-3xl font-semibold'>Services</h1>
                    <div className='hidden sm:flex flex-col justify-between gap-3'>
                        {services.map((item, idx) => (
                            <p 
                                key={idx}
                                onClick={() => handleNavClick(idx)} 
                                className={`cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'text-[#00C950] translate-x-2' : 'text-gray-500 hover:text-gray-300'}`}
                            >
                                {item.title.split(' ').slice(0, 2).join(' ')} <br /> {item.title.split(' ').slice(2, 4).join(' ')}
                            </p>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col w-full relative'>
                    <div className='sm:h-160 h-120 w-full overflow-hidden'>
                        <div
                            className='flex h-auto flex-col transition-transform duration-500 ease-in-out'
                            style={{ 
                                transform: `translateY(-${activeIndex * (isMobile ? 30 : 40)}rem)` 
                            }}
                        >
                            {services.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className={`flex md:flex-row flex-col bg-black sm:h-160 h-120 sm:justify-center justify-evenly items-center sm:px-5 px-2 py-5 lg:gap-10 gap-5 shrink-0 transition-all duration-500 ${
                                        activeIndex === idx && !isTransitioning 
                                        ? 'opacity-100 scale-100 blur-0 translate-y-0' 
                                        : `opacity-0 scale-95 blur-sm ${direction === 1 ? 'translate-y-20' : '-translate-y-20'}`
                                    }`}
                                >
                                    
                                    <div className='flex justify-center items-center h-auto w-[40%]'>
                                        <div className='lg:min-w-78 max-w-120 border border-[#00C950] py-5 rounded-xl shadow-lg shadow-[#37ac66]'>
                                            <img
                                                className="w-full h-auto object-contain px-4"
                                                src={item.img}
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    
                                    <div className='md:max-w-[60%] w-full flex flex-col justify-center items-center gap-10'>
                                        <div className='lg:w-[85%] flex flex-col sm:gap-5 gap-2'>
                                            <h1 className='lg:text-4xl md:text-3xl sm:text-md tracking-tight leading-tight font-semibold'>{item.title}</h1>
                                            <p className='sm:text-lg text-xs leading-tight text-gray-400'>{item.description}</p>
                                            <ul className='grid grid-cols-2 list-disc list-outside pl-5 md:text-base text-xs'>
                                                {item.services.map((lis, sIdx) => (
                                                    <li key={sIdx} className="text-gray-300">
                                                        <span className='text-white'>{lis}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot Navigation */}
                    <div className='flex sm:hidden flex-row gap-4 mt-6 justify-center pb-4 z-30'>
                        {services.map((_, idx) => (
                            <div 
                                key={idx}
                                onClick={() => handleNavClick(idx)}
                                className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                                    activeIndex === idx ? 'bg-[#00C950] scale-125' : 'bg-gray-600'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlider;