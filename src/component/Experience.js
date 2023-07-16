import React from 'react'
import { Heading } from '@chakra-ui/react'
import exp from './ExpInfo'
export default function Experience() {
  const data = exp.map((item) => {
    return <>

      <ol>
        <li>
          <div class="flex flex-start w-[90vw] lg:max-w-[40rem] md:max-w-[35rem] justify-center items-center text-center text-xl">
            <div class="exp-card block p-6 rounded-xl shadow-lg bg-gray-100 w-full ml-6 mb-8">
              <img src={item.img} class='w-[10rem] m-auto pb-4' />
              <div class="grid grid-cols-1 justify-between mb-2">
                <p class="font-bold text-purple-700  hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg" style={{ color: '#BA00BB' }}>{item.title}</p>
                <p class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg" style={{ color: '#00008B' }}>{item.role}</p>
                <p class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-lg">{item.timeLine}</p>
              </div>
              {/* <p class="text-gray-700 mb-6">{item.desc}</p> */}
            </div>
          </div>
        </li>
      </ol>
    </>
  })
  return (
    <>

      <Heading
        size="lg"
        as="h2"
        textDecoration="underline"
        textAlign={{}}
        fontFamily='Orbitron'
        letterSpacing='1px'
        color='white'
        marginTop='10'
        className='p-4 md:mt-16'
      >
        Experience
      </Heading>
      <div className='text-left flex max-w-full flex-wrap my-20 mt-40 min-w-0'>
        {data}
      </div>
    </>
  )
}
