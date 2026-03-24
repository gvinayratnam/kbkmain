import React, { useState } from 'react'
import box from '../assets/aboutexperts/box.png'
import grad from '../assets/aboutexperts/grad.png'

const Project = () => {
    const [inputvalues,setInputvalues] = useState({
        'name':'',
        'email':'',
        'interest':'',
        'budgest':'',
        'project':''

    })
    const handleinput=(e)=>{
        setInputvalues({
            ...inputvalues,[e.target.name]:e.target.value
        })
    }
    const submitHandle = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
}
    console.log(inputvalues)
    return (
        <div className='relative  bg-black lg:py-0 py-10'>
            <div className='sm:h-full h-50 w-full'>
                <img className='w-full h-full  object-cover object-top ' src={grad} alt="" />
            </div>
            <img className='absolute sm:top-[10%] top-0' src={box} alt="" />
            <div className='absolute lg:top-[12%] top-[3%] flex flex-col items-center z-10 text-white  w-full'>
                <h3 className='md:text-7xl text-4xl'>
                    Have a
                </h3>
                <h1 className='md:text-9xl text-6xl'>
                    Project
                </h1>
                <h3 className='md:text-7xl text-4xl'>
                    In Mind?
                </h3>
            </div>
            <div className=' w-full sm:absolute static lg:bottom-[10%] sm:bottom-[0%]   container-p flex flex-col justify-center items-center z-10  text-white '>
                <div className='md:w-[70%] '>
                    
                    <form onSubmit={submitHandle} className='w-full flex flex-col sm:gap-10 gap-5' >
                        <div className='flex  sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                            <div className="relative w-full">
                                <input
                                    name='name'
                                    value={inputvalues.name}
                                    onChange={e=>handleinput(e)}
                                    type="text"
                                    placeholder="Name"
                                    className={`peer focus:outline-none px-1 py-3 rounded-md w-full h-full  object-cover object-top border-b  border-gray-700/50  placeholder:text-[#FFFFFFA3]`}
                                />

                                <span className="absolute left-11.75 top-1/2 -translate-y-1/2 text-[#07C42C] 
                                    peer-focus:hidden peer-not-placeholder-shown:hidden">
                                    *
                                </span>
                            </div>

                            <div className="relative w-full">
                                <input   
                                    type="text"
                                    name='email'
                                    onChange={e=>handleinput(e)}
                                    value={inputvalues.email}
                                    placeholder="Email"
                                    className="peer w-full focus:outline-none px-1 py-3 rounded-md border-b-2 border-gray-700/50 placeholder:text-[#FFFFFFA3]"
                                />

                                <span className="absolute left-11 top-1/2 -translate-y-1/2 text-[#07C42C]  
                                    peer-focus:hidden peer-not-placeholder-shown:hidden ">
                                    *
                                </span>
                            </div>
                        </div>

                        <div className='flex  sm:flex-nowrap flex-wrap sm:gap-10 gap-5'>
                            <select className="w-full py-3 focus:outline-none px-1 rounded-md border-b-2 border-gray-700/50 text-[#FFFFFFA3] " value={inputvalues.interest} name='interest'  onChange={e=>handleinput(e)}>
                                <option value="You are interested in" >You are interested in</option>
                            </select>
                            <select className="w-full py-3 focus:outline-none px-1 border-b border-gray-700/50 text-[#FFFFFFA3]" name='budgest' value={inputvalues.budgest} onChange={e=>handleinput(e)}>
                                <option value="Budget in USD" className='text-black'>Budget in USD</option>
                                <option value="hii" className='text-black'>hii</option>
                            </select>
                        </div>

                        <div>
                            <input className='placeholder:text-[#FFFFFFA3] w-full py-3 rounded-md border-b-2 border-gray-700/50 focus:outline-none px-1' type="text" placeholder='Project details' name="project" 
                            value={inputvalues.project}
                            onChange={e=>handleinput(e)}
                            id="" />
                        </div>

                        <div className='flex lg:flex-row gap-3 flex-col justify-between items-center '>
                            <button type='submit' className='text-xs border rounded-md cursor-pointer px-4 py-2'>SUBMIT MESSAGE</button> 
                            <p className='sm:text-base text-xs md:py-0 py-4!'><span>say hello - </span><span className='text-[#07C42C]'><a href="mailto:hello@kbkbusinesssolutions.com">hello@kbkbusinesssolutions.com</a></span></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Project
