import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#e5e7eb] py-2 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 border-b border-b-gray-300'>
        <div className='flex flex-col justify-center text-center py-12 px-12'>
          {/* <p className='text-[#40c1ac] font-bold '>DATA ANALYTICS DASHBOARD</p> */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-extrabold py-8'>Accelerate Oracle Implementations with <br /> Agentic AI</h1>
          <p className='text-slate-600'>
            Our cutting-edge Agentic AI solutions revolutionize Oracle implementations by automating complex tasks such as data conversion, test case creation & execution, BRD and training content creation. Designed to reduce manual effort and implementation timelines, these intelligent agents enable faster deployments, improved accuracy, and enhanced ROI across Oracle Cloud applications including ERP, EPM, and HCM. Experience a smarter, more efficient path to Oracle success with our AI-driven approach.
          </p>
          {/* <button className='bg-black text-[#40c1ac] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
        {/* <img className='w-[250px] mx-auto my-4' src={Laptop} alt='/' /> */}
      </div>
    </div>
  );
};

export default Analytics;
