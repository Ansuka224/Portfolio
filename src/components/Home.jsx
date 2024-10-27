import React from 'react';
import Profilepic from '../assets/profilepic.jpeg'; 

const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-purple-100 to-gray-300'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between h-full text-white px-4'>
        
        <div className='flex flex-col items-center md:items-start w-full md:w-1/2'>
          <h2 className='text-4xl md:text-5xl font-bold text-rose-300 mb-4 md:mb-6 text-center md:text-left'>
            I am Ansuka Thapaliya.<br />
            A computer science student
          </h2>
          <p className='text-lg md:text-xl text-black text-center md:text-left'>
            I am a student at Sunway College, pursuing a
            BSc(Hons) degree in Computer Science with Artificial Intelligence,
            affiliated with Birmingham City University, UK.
          </p>
        </div>

        <div className='mt-8 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end md:ml-20'>
          <img 
            src={Profilepic} 
            alt="my profile" 
            className="rounded-full w-80 h-80 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
