import React from 'react'
import VerticalNavbar from './components/VerticalNavbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MessMenu from './pages/MessMenu';
import BusSchedule from './pages/BusSchedule';

function App() {

  return (
    <div className='flex pt-[33px] px-4'>
        <VerticalNavbar />
        <div className='w-full bg-[#EFF3FA] rounded-t-2xl '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/messmenu' element={<MessMenu />} />
            <Route path='/busschedule' element={<BusSchedule />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
