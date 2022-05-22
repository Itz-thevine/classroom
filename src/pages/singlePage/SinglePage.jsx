import React from 'react'

function SinglePage() {
  return (
    <div>
        <video controls className='w-full max-h-96' src='https://youtu.be/Yu2Pvc1ObRw'>
        </video>
        <div className='container flex mx-auto mt-10 flex-col items-start'>
            <p className='text-2xl font-bold'>Introduction Figma Basic to Advance</p>
            <p className='text-mainColorFour text-sm'>Biology</p>
            
            <p></p>
        </div>
    </div>
  )
}

export default SinglePage

