import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 
        font-mono mb-10'>
            <div className='flex gap-10 p-4 justify-center text-white '>
                <a href="https://www.linkedin.com/in/sai-balaji118" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all text-white bg-blue-700'
                target='_blank'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/saibalaji118" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all text-white bg-gray-900'
                target='_blank'>
                    <FaGithub />
                </a>
            </div>
            <p>@2025 Sai Balaji. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer