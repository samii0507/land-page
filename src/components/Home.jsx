import React from 'react';
import { Carousel } from "flowbite-react";
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';

const Home = () => {
  return (
    <div className='bg-white'>
     <div className='mx-auto min-h-screen h-screen w-full '>
       <Carousel controls="outside w-full mx-auto">
        <div className="">
          <div className="relative "> 
            <img src={bg1} alt="" className="w-full h-screen object-cover rounded-lg" /> 
              <div className="absolute inset-0 flex items-center  pl-64 py-10"> 
                <h1 className="text-5xl font-semibold text-white leading-snug animate-fade-in">
                    Trusted reproductive <br />
                    Medicine and fertality <br />
                    Control center
                 </h1>
              </div>
           </div>
           
        </div>
        <div className="relative "> 
            <img src={bg2} alt="" className="w-full h-screen object-cover rounded-lg" /> 
              <div className="absolute inset-0 flex items-center justify-end pr-64 py-10"> 
                <h1 className="text-5xl font-semibold text-black leading-snug animate-fade-in">
                    Pregancy
                 </h1>
              </div>
           </div>
      </Carousel>
     </div>
    </div>
  )
}

export default Home