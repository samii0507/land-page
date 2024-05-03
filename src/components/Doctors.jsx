import React from 'react'
import logo2 from '../assets/logo2.png'
import { Card } from "flowbite-react";
import doctor1 from '../assets/doctor-1png.png';
import bg4 from '../assets/bg4.jpg';

const Doctors = () => {
  return (
   <div  style={{
    backgroundImage: `url(${bg4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '110vh' // Ensure full viewport height
  }} >
     <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto '>
        
        <div className='text-center my-8'  >
            <h1 className='text-5xl text-gray-500 font-semibold mb-2' >
            Our Specialised Team</h1>
            
        </div>
        <div className='flex justify-center'>
           <img src={logo2} alt="" />
        </div>
        <div className="flex flex-row space-x-4 px-32 py-10 justify-center">
         <Card
             className="max-w-64 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={doctor1}
         >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dr.Tharndu
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Specaliazation Description
          </p>
         </Card> 
         <Card
             className="max-w-64 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={doctor1}
         >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dr.Tharndu
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Specaliazation Description
          </p>
         </Card>
         <Card
             className="max-w-64 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out "
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={doctor1}
         >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dr.Tharndu
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Specaliazation Description
          </p>
         </Card>
         <Card
             className="max-w-64 hover:shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={doctor1}
         >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dr.Tharndu
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Specaliazation Description
          </p>
         </Card>
        </div>
    </div>
   </div>
  )
}

export default Doctors