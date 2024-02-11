import React from 'react'
import bg3 from '../assets/bg3.png'

const Contact = () => {

  return (
    <>
        <div className='md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Contact page</h1>
                        <p className='md:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut nesciunt aliquid commodi delectus sit nam quisquam non in nihil!</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary'>Contact me</button> 
                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative py-[8%] '>
                        <img src={bg3} alt="Images" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact