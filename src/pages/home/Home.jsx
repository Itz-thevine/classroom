import React from 'react'
import Header from '../../component/header/Header'
import heroImage from '../../assets/heroImage.png'

function Home() {
  return (
    <div>
        <Header/>
        <div className='container mx-auto'>
            <div className='flex justify-between px-10'>
                <div className='flex-1 items-center flex'>
                    <div className=''>
                        <h1 className=' w-full mb-5 font-bold text-7xl text-mainColorThree text-left'><span className='text-mainColorOne'>Learn</span> on your class <span className='text-mainColorTwo'>schedule</span></h1>
                        <p className='w-4/5 flex text-left text-mainColorThree font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, lacus eu vestibulum dictum, elit justo tincidunt quam, nec fringilla dui justo ut est.</p>
                    </div>
                </div>
                <div className='flex flex-1 justify-end'>
                    <img src={heroImage} alt="" width={550} height={350} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home