import React, { Profiler } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Photo from '../components/Photo'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Lang from '../components/Lang'
import Gucci from '../components/Gucci'
import Certification from '../components/Certification'
import Certi from '../components/Certi'
import Contact from '../components/Contact'


const page = () => {
  return (
    <div className='relative'>
      {/* <Navbar /> */}
      <div className='flex justify-between first'>
        <Photo />
        <Project />
        </div>
        <div className="second bg-black ">
          <Skills/>
          <Lang/>
        </div>
        <div className="third">
          <Gucci/>
        </div>
        <div className="fourth">
          <Certification/>
        </div>
        <div className='absolute bottom-0 w-full'>
          {/* <Footer /> */}
         
          {/* <Contact /> */}
        </div>
    </div>
  )
}

export default page
