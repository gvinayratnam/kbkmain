import React from 'react'
import boxes from '../assets/imagesabout/div.icon.png'
import sec from '../assets/imagesabout/Component 3.png'
import thir from '../assets/imagesabout/div.service-icon.png'
import bgbanner from '../assets/imagesabout/bgbanner.png'
import tunder from '../assets/imagesabout/tunder.png'
import imgs from '../assets/imagesabout/img.png'


const Banner = () => {
    const services = [
        {
            id: 1,
            title: "Digital Marketing",
            description: "We design driven engagement, attract new customers, and boost social media.",
            icon: boxes,
            button: "View Details"
        },
        {
            id: 2,
            title: "Product Design",
            description: "We design driven engagement, attract new customers, and boost social media.",
            icon: sec,
            button: "View Details"
        },
        {
            id: 3,
            title: "App Development",
            description: "We design driven engagement, attract new customers, and boost social media.",
            icon: thir,
            button: "View Details"
        }
    ];
    return (
        <div className='bg-black container-p py-10 w-full'>
            <div className='bg-black text-[#E8E8E8] flex flex-col gap-10 items-center'>

                <div className=' w-full'>
                    <div className='flex justify-between flex-wrap md:flex-nowrap items-center lg:gap-0 md:gap-10 gap-5'>
                        <div>
                            <p className='font-thin text-xs mb-3'> OUR SERVICES</p>
                            <h3 className='sm:text-2xl sm:w-xs leading-tight  truncate sm:whitespace-nowrap whitespace-normal relative '>Boost Your Brand With Powerful Digital Solutions
                                <span className='absolute inset-0 [background:linear-gradient(135deg,transparent_30%,#000_55%)]'></span>
                            </h3>
                        </div>
                        <div className='md:w-sm'>
                            <p className='text-sm font-light'>Enhance your brand’s visibility and growth using innovative,
                                marketing solutions crafted expertly.</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-5 md:flex-row flex-col '>
                        {

                            services.map((service) => (
                                <div key={service.id} className='relative flex flex-col justify-start items-start lg:gap-10 gap-4 [background:linear-gradient(40deg,#07C42C33_1%,#0B0B0B_30%)] backdrop-blur-xl lg:p-10 p-5 rounded-xl'>
                                    <img className='absolute w-full top-0 ' src={bgbanner} alt="" />
                                    <img className=' max-h-12.5' src={service.icon} alt="" />
                                    <h3 className='lg:text-xl text-lg'>{service.title}</h3>
                                    <p className='text-xs lg:pt-25 md:pt-13 border-b border-gray-800/50 md:pb-5 pb-10 font-light'>{service.description}</p>
                                    <button className='text-xs'>{service.button}</button>
                                </div>
                            ))

                        }
                    </div>
                </div>
                <div className='sm:w-md p-2 rounded-full  flex items-center outline-none gap-3 border border-[#07C42C] text-xs bg-[#B7B7B7] text-black'>
                    <div className='bg-black outline-none p-1 rounded-full h-8 w-8 flex items-center justify-center' ><img className=' h-full ' src={tunder} alt="" /> </div>
                    <div className='flex sm:flex-row flex-col'>
                        <p>We Strive To Lead The way In The business</p>
                        <p>Know All Services</p>
                    </div>

                </div>
                <div className='md:text-3xl sm:text-xl text-sm  w-full flex flex-col items-center text-[#FFFFFF] gap-2 pt-10'>
                    <p className='text-base font-light text-center w-full bord'> Who we are</p>
                    <p className='w-full text-center'>Strategy, design, and technology</p>
                    <div className='w-full text-center flex items-center justify-center'>
                        <p>working together to </p><img className='sm:h-6 h-3 px-1' src={imgs} alt="" /> <p> turn ideas into</p>
                    </div>
                    <p className='w-full text-center'>scalable digital products.</p>
                    <div className=' rounded-full outline-none flex flex-row gap-2 px-4 md:py-2 py-1 border border-[#07C42C] text-xs bg-[#B7B7B7] text-black'>
                        <button >
                            <span className=''>Discover More</span>
                        </button>
                        <div className='w-7 h-7 p-2 rounded-full relative bg-[#000000] flex  items-center justify-end'>
                            <div className=' absolute bg-white w-1 h-1 top-1.5 left-3 rounded-full'></div>
                           <div className='bg-white w-1 h-1 rounded-full'></div>
                           <div className='absolute bg-white w-1 h-1 left-3 bottom-1.5 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
