import React from 'react'
import VerticalNavbar from './components/VerticalNavbar'

function App() {

  return (
    <div className='flex'>
      <VerticalNavbar>
        <h1 className='text-white'>Vertical Navbar</h1>
      </VerticalNavbar>
      <div className='w-full bg-gray-200'>
        <h1 className='text-center'>Main Content</h1>
      </div>
    </div>
  )
}

export default App
