

const Hero = () => {
  return (
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
  );
};

export default Hero;
