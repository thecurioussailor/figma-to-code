import React from 'react'

function Navbar() {
  return (
    <div className='h-[80px] w-full top-0 fixed z-20 flex justify-between items-center bg-[#00000033] backdrop-blur-xl'>
        <div className='w-[87px] ml-[243px] rounded-[30px]'>
            <img src='https://s3-alpha-sig.figma.com/img/64fd/2ad3/fe72bd43def70cb321dc93b14a3b55fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjAazcXUgIjozcC0IbjfEuF9Ug4TOSYxpeHM8pcaylZIN9p2sPgtUYjZJ9g38m6Ko5gd-GwK1B0knkh-vB6pa2K~cxP4lFTqJyQjS5DJ1TBn2XLGRHXY4gJtxpXVurrQU6zm~f2StLEN0ir~Cp2lgwn5-zXUBzQfKq6R1h-ysKplZAs1HkwN4e~4FS~2xHbUactwt6XYfoxMcqktRLaKfF9dKjjuwkfc4Pb~TtbvzoH-g1V7LjvqTGf0Fv5Kklc6IsWS6COdFMzO2p9YEg8Q8KMm36~7vY32RJtp9fRmqvfWM2fBpv20EH0Mt2ZpjWC41ZfrELQMjli9~PD7l~5K6Q__'/>
        </div>
        <div className='flex items-center'>
            <ul className='text-[#E4E6F2] text-[18px] leading-[30px] flex items-center gap-[28px]'>
                <li className='p-2'>About</li>
                <li>Services</li>
                <li>Process</li>
                <li>Work</li>
                <li>Pricing</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className='border top-[12px] flex items-center justify-center border-[#6881FF] mr-[286px] w-[134px] h-[53px] rounded-[12px]'>
            <p className='text-white'>Book a call</p>
        </div>
    </div>
  )
}

export default Navbar