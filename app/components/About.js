import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='smruti '>
                Hi!  I'm Smrutishree Misra, an enthusiastic Electronics and Communication Engineering (ECE) student with a strong passion for technology, problem-solving, and building impactful digital solutions.

                My interests lie at the intersection of Data Structures & Algorithms (DSA) and Full Stack Web Development. I enjoy writing clean, efficient code and exploring how frontend and backend technologies come together to create seamless user experiences.

                Currently, I’m sharpening my skills in:

                <div>📚 DSA through structured problem-solving on platforms like LeetCode and GFG</div>

                <div>💻 Full Stack Development using technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, and Next.js</div>

                As an engineering student, I’m always excited to learn, build, and contribute to meaningful tech projects that challenge me to grow both technically and creatively.


            </div>
            <div className="resume">
                <a href="RESUME.pdf" download>
                    <button>Download Resume (PDF)</button>
                </a>
            </div>
        </div>
    )
}

export default About
