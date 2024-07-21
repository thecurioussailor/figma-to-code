import React, { useState } from 'react'
import BM from "../assets/burger-menu.svg"
import CM from "../assets/cross-menu.svg"
function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
        <div className='hidden h-[80px] w-full top-0 fixed z-20 lg:flex justify-between items-center bg-[#00000033] backdrop-blur-xl'>
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

        {/* mobile plus tablet view */}
            <div className='flex flex-col justify-between h-[80px] w-full top-0 fixed z-20 lg:hidden items-center bg-[#00000033] backdrop-blur-xl'>
                <div className='flex justify-between items-center flex-row w-full'>
                    <div className='w-[87px] rounded-[30px]'>
                        <img src='https://s3-alpha-sig.figma.com/img/64fd/2ad3/fe72bd43def70cb321dc93b14a3b55fe?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hjAazcXUgIjozcC0IbjfEuF9Ug4TOSYxpeHM8pcaylZIN9p2sPgtUYjZJ9g38m6Ko5gd-GwK1B0knkh-vB6pa2K~cxP4lFTqJyQjS5DJ1TBn2XLGRHXY4gJtxpXVurrQU6zm~f2StLEN0ir~Cp2lgwn5-zXUBzQfKq6R1h-ysKplZAs1HkwN4e~4FS~2xHbUactwt6XYfoxMcqktRLaKfF9dKjjuwkfc4Pb~TtbvzoH-g1V7LjvqTGf0Fv5Kklc6IsWS6COdFMzO2p9YEg8Q8KMm36~7vY32RJtp9fRmqvfWM2fBpv20EH0Mt2ZpjWC41ZfrELQMjli9~PD7l~5K6Q__'/>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <img className={`${isOpen ? "block" : "hidden"} h-[87px]`} src={BM}/>
                            <img className={`${isOpen ? "hidden" : "block"} h-[87px]`} src={CM}/>
                        </button> 
                    </div>
                </div>
                <div className={`${isOpen ? "hidden" : "block"} relative w-full h-[200vh] lg:hidden -mt-3 z-30 items-center bg-[#151515]`}>
                <ul className='text-[#E4E6F2] text-[18px] leading-[30px] mt-20 flex flex-col justify-center items-center gap-[28px]'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Process</li>
                    <li>Work</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li className='border top-[12px] flex items-center justify-center border-[#6881FF] mb-64 w-[134px] h-[53px] rounded-[12px]'>Book a Call</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Navbar