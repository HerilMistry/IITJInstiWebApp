import React from 'react'

const ViewPaidExtrasButton = () => {
  return (
    <a
    href='https://www.youtube.com'
    target='__blank'
    className='flex gap-x-1 border-2 border-[#0042AB] px-2 py-1 items-center -tracking-tight rounded-sm text-[12px] font-semibold cursor-pointer transition-transform duration-100 hover:scale-105'
    >
        <span>View Paid Extras</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#5f6368"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
    </a>
  )
}

export default ViewPaidExtrasButton