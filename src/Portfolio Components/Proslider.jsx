import React, { useState } from 'react'
import beauty from '../assets/port/beauty.png'
import bhavi from '../assets/port/bhavi.png'
import event from '../assets/port/event.png'
import hari from '../assets/port/hari.png'
import lakhotia from '../assets/port/lakhotia.png'
import rain from '../assets/port/rain.png'
import sribalaji from '../assets/port/saibalaji.png'
import urs from '../assets/port/urs.png'

const projects = [
  
    { title: "Beauty Bay Lounge", image: beauty, link: "https://beautybaylounge.com" },
    { title: "Austin Event Centers", image: event, link: "https://austineventcenters.com" },
    { title: "Hari hara Kshethram", image: hari, link: "https://hariharakshethram.com/index-new.php" },
    { title: "Rainiersoft Global", image: rain, link: "https://rainiersoftglobal.com" },
    { title: "Urs Choice Gifts", image: urs, link: "https://urschoicegifts.com" },
    { title: "Bhavy's Kitchen", image: bhavi, link: "https://bhavyskitchen.com" },
    { title: "Lakhotia Education", image: lakhotia, link: "https://www.lakhotiaedu.com" },
    { title: "Sri Balaji Tax Services", image: sribalaji, link: "https://sribalajitaxservices.com" },
    
   
    { title: "Project Nine", image: beauty, link: "https://beautybaylounge.com" },
    { title: "Project Ten", image: event, link: "https://austineventcenters.com" },
    { title: "Project Eleven", image: hari, link: "https://hariharakshethram.com/index-new.php" },
    { title: "Project Twelve", image: rain, link: "https://rainiersoftglobal.com" },
    { title: "Project Thirteen", image: urs, link: "https://urschoicegifts.com" },
    { title: "Project Fourteen", image: bhavi, link: "https://bhavyskitchen.com" },
    { title: "Project Fifteen", image: lakhotia, link: "https://www.lakhotiaedu.com" },
    { title: "Project Sixteen", image: sribalaji, link: "https://sribalajitaxservices.com" }
];

const Proslider = () => {
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    

    const totalPages = Math.ceil(projects.length / itemsPerPage);


    const currentProjects = projects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='container-p bg-black text-white'>

            <h1 className='md:text-7xl text-3xl font-medium text-center'>EXPLORE</h1>

     
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 md:py-10 md:mt-10 mt-5'>
                {currentProjects.map((item, idx) => (
                    <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                        <div className='group relative w-full rounded-xl overflow-hidden max-h-80 bg-gray-600/50 backdrop-blur-md'>

                            <img className='transition-transform duration-700 w-full h-full object-cover object-top group-hover:scale-105' src={item.image} alt={item.title} />

                            <div className='absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/90 via-black/40 to-transparent'>
                                <h3 className='text-white text-lg font-medium tracking-wide'>{item.title}</h3>
                            </div>

                            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm'>
                                <h3 className='text-white text-xl font-bold mb-2'>
                                    {item.title}
                                </h3>

                                <p className='text-green-500 text-sm uppercase tracking-widest border-b border-white/40'>View Project</p>
                            </div>

                        </div>
                    </a>
                ))}
            </div>

         
            <div className="flex justify-center items-center space-x-4 mt-8 pb-10">
              
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1}
                    className={`px-2 py-2 text-lg font-medium transition-colors bg-transparent border-none ${
                        currentPage === 1 
                        ? 'text-gray-700 ' 
                        : 'text-gray-400 hover:text-white cursor-pointer'
                    }`}
                >
                    Prev
                </button>

             
                <div className="flex space-x-4">
                    {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => goToPage(pageNumber)}
                                className={`text-lg font-medium transition-colors cursor-pointer bg-transparent border-none ${
                                    currentPage === pageNumber 
                                    ? 'text-white' 
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>


                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages}
                    className={`px-2 py-2 text-lg font-medium transition-colors bg-transparent border-none ${
                        currentPage === totalPages 
                        ? 'text-gray-700   ' 
                        : 'text-gray-400 hover:text-white cursor-pointer'
                    }`}
                >
                    Next
                </button>
            </div>

        </div>
    )
}

export default Proslider