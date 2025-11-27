import React from 'react'

const Gucci = () => {
  return (
    <div className='m-2 p-1 '>
      {/* Heading */}
      <h2 className="project-head   ">
        MY PROJECTS
      </h2>

      {/* Gucci Clone */}
      <div className="flex gucci justify-center items-center ">
        <div>
          <video src="Video/final.mp4" controls className='h-[300px] bg-blue-300 p-3 w-[500px] m-3 rounded-3xl'></video>
        </div>
        <div className="about text-lg p-5 m-3 w-[500px]">
          <h3 className="text-2xl font-bold mb-3">Gucci Clone</h3>
          <p className="mb-4">
            A modern e-commerce website inspired by Gucci’s official site. It showcases
            a luxury-themed landing page with featured collections, product categories,
            and boutique services. The design focuses on premium aesthetics, responsive
            layout, and smooth navigation, giving the feel of a real high-end fashion
            brand’s online store.
          </p>
          <a href="https://gucci-six.vercel.app/" 
             className='link flex justify-center w-[200px] m-2 rounded-2xl uppercase bg-gray-300 hover:bg-gray-400 transition'>
            Visit Site
          </a>
        </div>
      </div>

      {/* DayKeeper */}
      <div className="flex daykeeper justify-center items-center mb-20">
        <div>
          <video src="Video/videeeo.mp4" controls className='h-[300px] bg-blue-300 p-3 w-[500px] m-3 rounded-3xl'></video>
        </div>
        <div className="about text-lg p-5 m-3 w-[500px]">
          <h3 className="text-2xl font-bold mb-3">DayKEEPER</h3>
          <p className="mb-4">
            A personal productivity tool that combines motivation and time management.
            It includes a “Quote of the Day” feature, a stopwatch/timer, and quick
            links to essential study resources. Designed with simplicity in mind, it
            helps students and professionals stay organized and focused throughout the day.
          </p>
          <a href="https://day-keeper.vercel.app/" 
             className='link flex justify-center w-[200px] m-2 rounded-2xl capitalize bg-gray-300 hover:bg-gray-400 transition'>
            Visit Site
          </a>
        </div>
      </div>

      {/* Recipe Card */}
      <div className="flex card justify-center items-center">
        <div>
          <video src="Video/cake recipe card.mp4" controls className='h-[300px] p-3  bg-blue-300 w-[500px]  m-3 rounded-3xl'></video>
        </div>
        <div className="about text-lg p-5 m-3 w-[500px]">
          <h3 className="text-2xl font-bold mb-3">Recipe Card</h3>
          <p className="mb-4">
            A recipe-focused project that displays step-by-step instructions in a clean,
            card-style format. It provides preparation details, ingredients, and cooking
            steps in an easy-to-follow layout. The design emphasizes readability and
            user-friendliness, making it a perfect reference for beginners trying their
            hand at baking.
          </p>
          <a href="https://vaultofcodes.vercel.app/" 
             className='link flex justify-center w-[200px] m-2 rounded-2xl capitalize bg-gray-300 hover:bg-gray-400 transition'>
            Visit Site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Gucci
