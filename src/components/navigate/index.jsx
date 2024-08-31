import Image from 'next/image'
import React from 'react'
import logo from "/public/navlogo/vyblogo.gif"
import Link from 'next/link'
import { Search } from 'lucide-react'
import LoginButton from './LoginButton'
const Navigate = () => {

  return (
    <header className='fixed z-10 top-0 w-full mt-3 flex items-center justify-center xl:px-[150px]'>
      <nav className='h-[78px] px-5 rounded-full w-full flex items-center justify-between bg-[#EFEFEF]/30 backdrop-blur-lg overflow-visible'>
        {/* logo and search bar */}
        <div className='flex items-center gap-x-3 bg-transparent'>
        <Link href="/">

        <Image
        src={logo}
        height={48.82}
        width={80}
        priority
        alt='vyb logo'
        />
        </Link>
        <div className='border border-black rounded-full h-12 w-[300px] flex items-center relative '>
          <input type="text" placeholder='Search Creator' className='w-full h-full rounded-full placeholder:pl-10 placeholder:font-light placeholder:text-sm ' />
          <div className='flex items-center absolute h-full'>
            <Search className='font-extrabold ml-2'/>
          <p className='ml-48 text-tertiary underline font-medium'>Creator</p>
          </div>
        </div>
        </div>
        {/* nav list */}
        <ul className='flex items-center gap-x-14 text-primarytext text-lg'>
          <li><Link href="/contactus">Contact Us</Link></li>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/policies">Policies</Link></li>
        </ul>
        <Link href="/login">
        <LoginButton/>
        </Link>
        


    </nav>
    </header>
    
  )
}

export default Navigate