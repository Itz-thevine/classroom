import React from 'react'
import {useParams} from 'react-router-dom'
import db from '../../db/db'

function SinglePage() {
  let {id} = useParams()
  const data = db[id - 1]

  console.log(data)


  return (
    <div>
        <video controls className='w-full max-h-96' src='https://youtu.be/Yu2Pvc1ObRw'>
        </video>
        <div className='container flex mx-auto mt-10 flex-col items-start'>
            <p className='text-3xl font-bold'>{data.name}</p>
            {/* <p className='text-mainColorFour text-sm py-5'>Biology</p> */}
            <div className='flex flex-col items-start'>
              <p className='text-2xl font-semibold mt-5 '>Introduction:</p>
              <p className='text-left mb-5'>{data.details.intro}</p>

              <p className='text-2xl font-semibold mb-5'>Branches</p>
              <div className='flex flex-wrap'>
                {
                  data.details.branches.map((branch , i) => (
                    <p key={i} className='border-solid rounded-lg border-2 mx-5 border-mainColorOne bg-mainColorOne text-white font-semibold h-14 flex items-center justify-center  px-5 mb-10'>
                    {branch}
                    </p>
                  ))
                }
               
              </div>
              


            </div>
           
        </div>
    </div>
  )
}

export default SinglePage

