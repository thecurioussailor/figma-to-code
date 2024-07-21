import React from 'react'

function Hero() {
  return (
    <div className='text-white mx-10 pt-[150px] md:pt-[220px] lg:pt-[270px] lg:ml-[279px]'>
        <div className='lg:w-[778px] w-full lg:h-[249px] bg-transparent'>
                <p className='text-[#FFFFFF] text-center lg:text-left font-[400] w-full text-[44px] lg:text-[56px] leading-[60px]'>Empowering Lives Through
                    Innovative <span className='border-b-[7px] font-[700] border-[#7F93FF]'>AI</span> Technologies.
                </p>
                <p className='leading-[30px] text-[20px] lg:text-[22px] text-center mt-[40px] text-[#C0C2CC] lg:mt-[20px]'>Finding new horizons for visionaries to accelerate their innovation and progress.</p>
            <div className='mt-[40px] lg:mt-[26px] flex flex-col justify-center items-center md:items-start lg:items-start lg:justify-start md:flex-row lg:flex-row'>
                <button className='text-[16px] md:text-[18px] lg:text-[18px] mb-6 md:mb-4 lg:mb-4 w-[239px] h-[53px] font-[600] md:font-[700] lg:font-[700] rounded-[12px] bg-[#6A35FF]'>Explore Our Services</button>
                <button className='w-[155px] border rounded-[12px] font-[600] h-[53px] md:ml-[15px] lg:ml-[15px] border-[#6881FF] border-solid'>Learn more</button>
            </div>
        </div>
        <p className='mt-[80px] lg:h-[30px] mb-10 text-[18px] text-center lg:text-[24px] bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] lg:inline-block text-transparent bg-clip-text'>From Ideas to Software Solutions <span className='text-yellow-500'>💡✨</span> From Ideas to Software Solutions <span className='text-yellow-500'>🌟✨</span> From Ideas to      </p>
    </div>
  )
}

export default Hero