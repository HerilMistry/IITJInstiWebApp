import React from 'react'
import VerticalNavbar from './components/VerticalNavbar'

function App() {

  return (
    <div className='flex pt-[33px] pl-[33px]'>
      <VerticalNavbar/>
      <div className='w-full bg-[#EFF3FA]'>
        <h1 className='text-center'>Main Content</h1>
      </div>
    </div>
  )
}

export default App
