import React from 'react'
import { Heading } from '@chakra-ui/react'
import exp from './AcvInfo'

export default function Education() {
  const data = exp.map((item) => {
    return <>
      <ol>
        <li>
          <div class="flex flex-start w-[90vw] lg:max-w-[40rem] md:max-w-[35rem]">
            <div class="exp-card block p-6 rounded-xl shadow-lg bg-gray-100 w-full ml-6 mb-8">
              <div class="grid grid-cols-1 justify-between mb-2">
                <p class="font-bold text-purple-700  hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-md" style={{ color: '#BA00BB' }}>{item.head}</p>
                <p lass="text-gray-700 mb-6" style={{ color: '#000000' }}>{item.body}</p>
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
        Achievements
      </Heading>
      <div className='text-left flex max-w-full flex-wrap my-20 mt-40 min-w-0'>
        {data}
      </div>
    </>
  )
}
