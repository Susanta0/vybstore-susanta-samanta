'use client'
import React, { useState } from 'react';
const Earning = () => {
    const [followers, setFollowers] = useState(10000); 
    const [products, setProducts] = useState(1);

    const calculateEarnings = () => {
        const monthlyEarning = (followers / 1000) * products * 150; // Example formula
        const yearlyEarning = monthlyEarning * 12;
        return { monthlyEarning, yearlyEarning };
    };

    const { monthlyEarning, yearlyEarning } = calculateEarnings();

  return (
    <div className='bg-secondary px-[150px] mt-20'>
        <p className='text-center font-semibold text-3xl py-20'>ESTIMATE EARNING POTENTIAL</p>
    <div className='flex justify-center gap-x-36 pb-20'>
        <div className='space-y-10'>
            <div className="flex flex-col gap-y-4">
                <label className='text-lg'>How many followers do you have?</label>
                <input 
                    type="range" 
                    min="0" 
                    max="1000000" 
                    step="1000"
                    value={followers} 
                    onChange={(e) => setFollowers(e.target.value)} 
                    className='w-[30em]'
                />
                <span className='w-fit mx-auto font-semibold rounded-2xl bg-secondary border border-b-4 border-primary px-5 py-3'>{(followers / 1000).toFixed(1)}k</span>
            </div>
            
            <div className="flex flex-col gap-y-4">
                <label className='text-lg'>How many products do you list monthly?</label>
                <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={products} 
                    onChange={(e) => setProducts(e.target.value)}
                    className='w-[30em]' 
                />
                <span className='w-fit mx-auto font-semibold rounded-2xl bg-secondary border border-b-4 border-primary px-6 py-2'>{products}</span>
            </div>
        </div>
        
        <div className="flex flex-col justify-around">
                <div className='flex flex-col items-center gap-y-5'>
                    <h3 className='text-black font-bold text-xl'>Monthly Earning</h3>
                    <p className='text-primary font-bold text-4xl'>₹{monthlyEarning.toLocaleString()}</p>
                </div>
                <div className='flex flex-col items-center gap-y-5'>
                    <h3 className='text-black font-bold text-xl'>Yearly Earning</h3>
                    <p className='text-primary font-bold text-4xl'>₹{yearlyEarning.toLocaleString()}</p>
                </div>
        </div>
        
    

    </div>
    </div>
  )
}

export default Earning



