import React from 'react'
import VerticalNavbar from './components/VerticalNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MessMenu from './pages/MessMenu';
import BusSchedule from './pages/BusSchedule';

function App() {

  return (
    <div className='flex pt-[33px] pl-[33px]'>
      <BrowserRouter>
        <VerticalNavbar />
        <div className='w-full bg-[#EFF3FA]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/messmenu' element={<MessMenu />} />
            <Route path='/busschedule' element={<BusSchedule />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
