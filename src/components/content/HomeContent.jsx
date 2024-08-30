import React from 'react'
import HerroVideo from './HerroVideo'
import Timeline from './Timeline'
import Earning from './Earning'
import Asked from './Asked'

const HomeContent = () => {
  return (
    <>
    <div className='mt-[115px]'>
    <HerroVideo/>
    <Timeline/>
    <Earning/>
    <Asked/>
    </div>
    </>
  )
}

export default HomeContent