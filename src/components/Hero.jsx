import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Hero = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className='flex justify-between items-center h-20 mx-auto px-16 text-white bg-white top-0 w-full sticky z-50 backdrop-blur-md'>
            {/* <h1 className='w-full text-3xl font-bold text-[#40c1ac]'>REACT.</h1> */}
           <a href="/"><img className=' h-8 w-32 font-bold text-[#40c1ac]' src='https://static.wixstatic.com/media/9e4b4e_bd13eb5f51bf4193a52b06afc6cd07ea~mv2.png/v1/fill/w_125,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group.png' /></a> 
            <ul className='hidden md:flex text-black'>
              {/* <li className='p-4'>Home</li>
              <li className='p-4'>Company</li>
              <li className='p-4'>Resources</li> */}
              {/* <li className='p-4'><img className='h-16 rounded-full w-16' src="data:image/jpeg;base64,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" alt="" /></li>
              <li className='p-4 justify-center mt-4 text-2xl'>Admin</li> */}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-[#40c1ac] m-4'>REACT.</h1>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
          </div>
    <div className='bg-white top-0'>
      <div className='max-w-[800px] mt-[-96px] w-full h-[95.3vh] mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#40c1ac] font-bold p-2 text-3xl'>
          UNLOCKING INSIGHTS WITH
        </p> */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
           Rewiring ERP <br /> with <br /> <p className='inline text-[#40c1ac]'>
           AI Agents
        </p>
        </h1>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Smart, autonomous AI-powered assistants that streamline operations, automate workflows, and enhance decision-making.</p>
        <a href='/login' className='transition-all text-black bg-[#40c1ac] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Get Started</a>
      </div>
    </div>
    </div>
  );
};

export default Hero;
