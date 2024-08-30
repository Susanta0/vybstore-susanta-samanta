import Image from 'next/image'
import React from 'react'

const HerroVideo = () => {
  return (
    <>
   <div className=''>
   <video className='w-full object-cover' src={'/herrosecvid/hero.mp4'} autoPlay muted loop />
   </div>
   <div className='px-[150px]'>
   <Banner/>
   </div>
   <div className=' mt-6 flex justify-center bg-secondary '>
   <Image className='object-cover' width={1292} height={685} priority alt='hero gif'  src="/herrosecvid/hero.gif"/>
   </div>
    </>
  )
}

export default HerroVideo


const Banner = ()=>{
  return (
    <>
    <div className='rounded-2xl border-2 shadow-md h-[200px] w-full flex items-center justify-between px-4'>
      <div className='h-full flex flex-col items-center justify-center px-10'>
        <Image priority height={104} width={104} alt='travel' src="/bannerLogo/travel.png"/>
        <h4 className='text-center font-bold text-[22px] w-[104px]'>Travel Ltinerary</h4>
      </div>
      <hr className='h-24 border'/>
      <div className='h-full flex flex-col items-center justify-center px-10'>
        <Image priority height={104} width={104} alt='travel' src="/bannerLogo/custom.png"/>
        <h4 className='text-center font-bold text-[22px] w-[156px]'>Custom Merchandise</h4>
      </div>
      <hr className='h-24 border'/>
      <div className='h-full flex flex-col items-center justify-center px-10'>
        <Image priority height={104} width={104} alt='travel' src="/bannerLogo/digital.png"/>
        <h4 className='text-center font-bold text-[22px] w-[104px]'>Digital Content</h4>
      </div>
      <hr className='h-24 border'/>
      <div className='h-full flex flex-col items-center justify-center px-10'>
        <Image priority height={104} width={104} alt='travel' src="/bannerLogo/fashon.png"/>
        <h4 className='text-center font-bold text-[22px] w-[104px]'>Fashion Brand</h4>
      </div>
    </div>
    </>
  )
}

