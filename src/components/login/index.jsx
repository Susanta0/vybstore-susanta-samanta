import Image from 'next/image'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div
    className='h-screen pt-24 bg-secondary px-[150px]'
    >
        <div
        className=' flex justify-center'
        >
            <div className='px-14'>
                <Image src="/login/login.svg" width={600} height={581} alt='login page logo'/>
            </div>
            <div className='w-2/5 bg-white pl-14'>
            <h1 className='text-center font-bold text-4xl mr-10'>Login</h1>
            <div className='border border-black mt-10 py-1.5 px-3 rounded-full flex items-center gap-x-1 m-auto ml-12 w-fit'>
                <FcGoogle className='h-7 w-7'/>
                <p className='font-semibold text-xl'>Sign up / Sign in Google</p>
            </div>
            <span className="relative flex justify-center mt-6 mr-10">
                <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white text-gray-400 px-6">OR</span>
</span>

                

<form class="mx-auto mt-10 mr-10">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-2xl font-bold text-black">Email</label>
    <input type="email" id="email" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-2xl font-bold text-black">Password</label>
    <input type="password" id="password" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='Enter Password' />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
    <p class="ms-2 text-base font-semibold text-primary">Reset Password</p>
    </div>
  </div>
  <div className='flex items-center justify-center'>

  <button type="submit" class="text-primary font-bold border border-primary m-auto rounded-full text-base w-fit px-12 py-2.5 text-center">Login</button>
  </div>
</form>

<span className="relative flex justify-center mt-6 mr-10">
                <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white text-1xl text-gray-400 px-6">Dont Have account</span>
</span>

<div className='flex items-center justify-center mr-10'>

<button type="submit" class="text-white font-medium bg-primary m-auto rounded-2xl text-1lg w-fit px-10 py-3 text-center mt-6">Sign up</button>
</div>


            </div>

        </div>
    </div>
  )
}

export default Login