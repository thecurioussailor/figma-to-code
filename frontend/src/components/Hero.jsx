import React from 'react'

function Hero() {
  return (
    <div className='text-white lg:pt-[270px] lg:ml-[279px]'>
        <div className='lg:w-[778px] lg:h-[249px] bg-transparent'>
                <p className='text-[#FFFFFF] font-[400] text-[56px] leading-[60px]'>Empowering Lives Through
                    Innovative <span className='border-b-[7px] font-[700] border-[#7F93FF]'>AI</span> Technologies.
                </p>
                <p className='leading-[30px] text-[22px] text-[#C0C2CC] mt-[20px]'>Finding new horizons for visionaries to accelerate their innovation and progress.</p>
            <div className='mt-[26px]'>
                <button className='text-[18px] w-[239px] h-[53px] font-[700] rounded-[12px] bg-[#6A35FF]'>Explore Our Services</button>
                <button className='w-[155px] border rounded-[12px] font-[600] h-[53px] ml-[15px] border-[#6881FF] border-solid'>Learn more</button>
            </div>
        </div>
        <p className='mt-[80px] h-[30px] text-[24px] bg-gradient-to-r from-[#1C1C1C] via-[#E3E3E3] to-[#1C1C1C] inline-block text-transparent bg-clip-text'>From Ideas to Software Solutions <span className='text-yellow-500'>💡✨</span> From Ideas to Software Solutions <span className='text-yellow-500'>🌟✨</span> From Ideas to      </p>
    </div>
  )
}

export default Hero