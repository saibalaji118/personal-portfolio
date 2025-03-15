import React, { useState } from 'react'
import ecommerce from '../assets/ecommerce.png';
import todo from '../assets/todo.png';
import food from '../assets/food.png';
import portfolio from '../assets/portfolio.png';

function Projects() {
    const [projects] = useState([
        {
            image: portfolio,
            name: "Portfolio App",
            description:" Developed personal portfolio application which contains about, projects, contact information ",
            technologies: ["React JS", "Tailwind CSS","JavaScript", "HTML"],
            appLink: "",
            codeLink: "",
        },
        {
            image: ecommerce,
            name: "E commerce App",
            description:" Developed Nxt Trendz application which is a clone for E-Commerce applications like Amazon, and Flipkart ",
            technologies: ["React JS", "JavaScript", "CSS", "HTML"],
            appLink: "https://saibalajitrendz.ccbp.tech/",
            codeLink: "https://github.com/saibalaji118/ecommerce-web-app",
        },
        {
            image: todo,
            name: "Todo App",
            description:"Developed a dynamic website that enables the user to create, edit, track the status of each todo item, Implemented todo CRUD operations by using JavaScript event listeners and used arrays, objects and their methods",
            technologies: ["JavaScript", "CSS", "HTML"],
            appLink: "https://todosaibalaji.ccbp.tech/",
            codeLink: "https://github.com/saibalaji118/todolist-website",
        },
        {
            image: food,
            name: "Food Munch App",
            description:"Developed a responsive and user-centric website for Food Store where users can see a list of food items, detailed information about a food item, offers and payment options",
            technologies: ["Bootstrap", "CSS", "HTML"],
            appLink: "https://fmsaibalaji.ccbp.tech/",
            codeLink: "https://github.com/saibalaji118/food-munch-website",
        }
    ]);


  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20 font-mono'>
        <div className='max-w-3xl mx-auto px-4 '>
            <h1 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 
            bg-clip-text text-transparent text-center '>
                Feature Projects
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                {projects.map((project,index)=>(
                    <div key={index} className='p-6 rounded-xl flex flex-col text-center items-center border-2
                    border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_9px_rgba(59,130,246,0.2)]
                    hover:-translate-y-1 transition-all hover:bg-cyan-900'>
                        <h2 className='font-semibold text-xl mb-4' >{project.name}</h2>
                        <p className='text-gray-300 mb-4 '>{project.description}</p>
                        <div className='flex flex-wrap sm:items-center gap-2 mb-4 '>
                            {project.technologies.map((item, index)=>(
                                <span key={index} className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance
                            hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition'>
                                    {item}
                                </span>
                            ))}
                            <div className='flex flex-col text-center justify-center my-5 py-3 gap-3 border-2 
                                 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]
                                cursor-pointer rounded-xl '>
                                <p className='text-gray-200'>View Project</p>
                                <a href={project.appLink} target='_blank' className='flex justify-between items-center font-bold text-blue-400
                                    transition-colors hover:text-white'>
                                    <img src={project.image} alt={`${project.name} Image`} />
                                </a>
                            </div>
                            <div className='flex flex-row items-center justify-center space-x-4 ml-14'>
                                <a href={project.appLink} target='_blank' className='flex flex-row bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 
                                            rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition realtive overflow-hidden'> 
                                                App  
                                </a>
                                <a href={project.codeLink} target='_blank' className='flex flex-row bg-gradient-to-r from-teal-500 to-indigo-600 py-3 px-6 
                                            rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition realtive overflow-hidden'> 
                                    <p>Code</p> 
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects