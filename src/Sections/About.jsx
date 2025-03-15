import React from 'react'

function About() {
    const skills = [
        "Python", "Java", "JavaScript", "ReactJs", "AngularJS", "NodeJS", "ExpressJS", "SpringBoot",
        "HTML", "CSS", "Tailwind CSS", "SQL", "MongoDB", "Docker", "Git"
    ]
  return (
    <section id='about' 
    className='min-h-screen font-mono flex items-center justify-center py-20 '>
        <div className='max-w-3xl mx-auto px-4 '>
            <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 
            bg-clip-text text-transparent text-center'>
                About Me 
            </h2>
            <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all '>
                <p className='text-gray-300 mb-5 text-xl'>
                7 months of IT experience in web application development, testing, and
                deployment, experience in developing high-performance web applications using
                React JS, Angular JS, JavaScript, Spring Boot, Node JS, Express JS, Tailwind CSS
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all '>
                    <h3 className='text-2xl text-center font-bold mb-8 '>
                        Skills 
                    </h3>
                    <div className='flex justify-center flex-wrap gap-2'>
                        {skills.map((skill,index)=> (
                            <span className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance
                            hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition' 
                            key={index}>
                                {skill}
                            </span>
                        ) )}
                    </div>
                </div>
                <div className='p-6 hover:-translate-y-1 transition-all '>
                    <h4 className='text-2xl text-center font-bold mb-8 '>
                        Education 
                    </h4>
                    <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
                        <li>
                            <strong>
                                <em> 
                                    M.Tech Dual Degree, 
                                </em> <br/>
                            </strong>
                            IIT Kharagpur (2017-2022)
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-6 hover:-translate-y-1 transition-all '>
                    <h5 className='text-2xl text-center font-bold mb-8 '>
                        Work Experience  
                    </h5>
                    <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
                        <li>
                            <strong > 
                                <em className='text-blue-400'> 
                                    Software Engineer, Integral Ad Science
                                </em> <br/>
                            </strong>
                            <span className='text-gray-100'>{"  "}(June 2022 to December 2022)</span> <br/>
                            <span className='text-white font-semibold'>Project Description:</span> 
                            - To report the ads measurement/verification metrics to the client in the form of charts or Excel/CSV
                            reports <br/>
                            - Primary responsibilities include analysis of the requirements from product manager, design, coding, testing, and owning
                            the functionality all the way to production, production support <br/>
                            - Coordinating/Working with different teams to make sure the assigned functionality is delivered to Production without
                            any hiccups <br/>
                            - Withakeen eye for detail, I actively engage in code reviews and participate in end-to-end testing to ensure the 
                            seamless implementation of new features <br/>
                           -  Suitability Profile Manager: Developed and integrated an enrollment feature into an existing product that was available to
                            internal stakeholders. Used AngularJS for front-end development to create UI screens, and worked with MySQL
                            databases to set up and maintain new tables to store enrolled users profile details <br/>
                            - Created APIs to get and update the data for the new features introduced and wrote Integration and Unit tests <br/>
                            - Implemented feature flags for the newly introduced features based on users and teams <br/>
                            <span className='text-white font-semibold'>Technologies:</span> AngularJS, Spring Boot, MySQL, Snowflake, JavaScript, HTML, CSS <br/>

                        </li>
                    </ul>
                </div>
        </div>
    </section>
  )
}

export default About