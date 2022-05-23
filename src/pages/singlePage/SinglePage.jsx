import React from 'react'

function SinglePage() {
  return (
    <div>
        <video controls className='w-full max-h-96' src='https://youtu.be/Yu2Pvc1ObRw'>
        </video>
        <div className='container flex mx-auto mt-10 flex-col items-start'>
            <p className='text-3xl font-bold'>Introduction Figma Basic to Advance</p>
            <p className='text-mainColorFour text-sm py-5'>Biology</p>
            <div className='flex flex-col items-start'>
              <p className='text-2xl font-semibold '>Introduction:</p>
              <p className='text-left mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

              <p className='text-2xl font-semibold mb-5'>Branches</p>
              <div className='flex flex-wrap'>
                <p className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                English linguistics
                </p>
                <p className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                English linguistics
                </p>
                <p className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                English linguistics
                </p>
                <p className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                English linguistics
                </p>
                <p className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                English linguistics
                </p>
               
              </div>
              


            </div>
           
        </div>
    </div>
  )
}

export default SinglePage

