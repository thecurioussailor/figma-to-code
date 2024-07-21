import React from 'react'
import Hero from '../components/Hero'
import e1 from '../assets/ellipse-1.png'
import e2 from '../assets/ellipse-2.png'

function Home() {
  return (
    <div>
        <div>
            <img className='absolute lg:left-[261px]' src={e1}/>
            <img className='absolute lg:left-[560px]' src={e2}/>
        </div>
        <Hero/>
    </div>
  )
}

export default Home