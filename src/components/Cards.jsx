import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Analytics from './Analytics';
import Footer from './Footer';
import aCT from '../assets/aCT.png';
import TransforMate from '../assets/TransforMate.png';
import Clarion from '../assets/Clarion.png';
import Explora from '../assets/Explora.png';
import Opticode from '../assets/Opticode.png';
import Navbar from './Navbar';

const Cards = () => {
  return (
    <div>
        <Navbar />
        <Analytics />
        <h1 className='text-center text-4xl font-bold py-8 bg-[#e5e7eb] text-black pt-24'>Meet our AI Agents </h1>
    <div className='w-full px-4 pb-24 bg-[#e5e7eb]'>
      <div className='px-60 mx-auto grid md:grid-cols-4 gap-20'>
          <div className='w-80 flex flex-col bg-white rounded-xl shadow-lg border border-slate-100 p-4 my-4 transition-transform duration-300 h-auto hover:scale-105 hover:shadow-2xl hover:border-[#40c1ac] border-transparent group'>
              <img className='w-20 mx-auto my-auto ' src={aCT} alt="/" />
              <h2 className='text-2xl font-bold border-b text-center py-8'>aCT</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8 h-32 text-slate-500'>Agentic AI Solution for Test Script Execution and Report Generation</p>
              </div>
              <a href='/demo' className='transition-all text-black bg-[#40c1ac] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 pl-7 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Select</a>
          </div>
          <div className='w-80 flex flex-col bg-white rounded-xl shadow-lg border border-slate-100 p-4 my-4 transition-transform duration-300 h-auto hover:scale-105 hover:shadow-2xl hover:border-[#40c1ac] border-transparent group'>
              <img className='w-20 mx-auto my-auto ' src={TransforMate} alt="/" />
              <h2 className='text-2xl font-bold border-b text-center py-8'>TransforMate</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8 h-32 text-slate-500'>Agentic AI Solution for efficient data ingestion, cleansing, transformation, and integration into enterprise ERP systems</p>
              </div>
              <a href='https://transformate-demo.vercel.app/' target='_blank' rel='noopener noreferrer' className='transition-all text-black bg-[#40c1ac] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 pl-7 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Select</a>
          </div>
          <div className='w-80 flex flex-col bg-white rounded-xl shadow-lg border border-slate-100 p-4 my-4 transition-transform duration-300 h-auto hover:scale-105 hover:shadow-2xl hover:border-[#40c1ac] border-transparent group'>
              <img className='w-20 mx-auto my-auto ' src={Explora} alt="/" />
              <h2 className='text-2xl font-bold border-b text-center py-8'>Explora</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8 h-32 text-slate-500'>Agentic AI Solution to automate requirement gathering and creation of BRD from notes, meetings</p>
              </div>
              <a href='https://xplora-demo.vercel.app/' target='_blank' rel='noopener noreferrer' className='transition-all text-black bg-[#40c1ac] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 pl-7 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Select</a>
             {/* <button className='transition-all text-black bg-[#40c1ac] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Select</button> */}
          </div>
          <div className='w-80 flex flex-col bg-white rounded-xl shadow-lg border border-slate-100 p-4 my-4 transition-transform duration-300 h-auto hover:scale-105 hover:shadow-2xl hover:border-[#40c1ac] border-transparent group'>
              <img className='w-20 mx-auto my-auto ' src={Opticode} alt="/" />
              <h2 className='text-2xl font-bold border-b text-center py-8'>Opticode</h2>
              {/* <p className='text-center text-4xl font-bold'>$149</p> */}
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8 h-32 text-slate-500'>Agentic AI Solution to generate and optimize code for Oracle EPM solutions</p>
              </div>
              <button className='transition-all text-black bg-[#40c1ac] w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-black hover:text-[#40c1ac] shadow-md focus:outline-none focus:ring-2 focus:ring-[#40c1ac]'>Select</button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
