import React from 'react';
import profileImg from '../assets/Profile.jpg';
import { FiDownload } from "react-icons/fi";
import resume from '../assets/saibalajiresume.pdf';

function Home() {
  return (
    <section id='home' className='min-h-screen flex flex-col items-center justify-center 
    lg:flex-row-reverse gap-9 lg:gap-15'>
        <div className='text-center z-10 px-4'>
            <img className='w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px]
            object-cover object-bottom hover:translate-y-1 transition-all'
             src={profileImg} alt="Profile Image" />
        </div>
        <div className='text-center z-10 font-mono px-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl lg:max-w-[500px] font-semibold mb-6 px-1 
            bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>
                I am Ukkala Sai Balaji 
            </h1>
            <p className='text-gray-300 text-lg mb-8 max-w-lg mx-auto'>
                Full Stack developer with proficiency in building robust web applications using MEAN/MERN stack technologies along with
                Java spring-boot framework and Python with extensive knowledge in both RDBMS and NoSQL
            </p>
            <div className='flex items-center justify-center space-x-4'>
                <a href="#contact" className='flex flex-row bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 
                rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition realtive overflow-hidden'> 
                    Contact Me 
                </a>
                <a href={resume} download className='flex flex-row bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 
                rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition realtive overflow-hidden'> 
                    <p>Resume</p> 
                    <span className='h-5 ml-3 text-2xl text-white'> 
                        <FiDownload />
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home