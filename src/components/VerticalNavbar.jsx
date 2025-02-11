import React, { useState} from 'react'
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  const [activeButton, setActiveButton] = useState(0);

  const options = ['home', 'mess menu', 'Bus schedule',...Array(5).fill('mess menu')]
  const paths = ['/','/messmenu','/busschedule', ...Array(5).fill('/')]
  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M283.33-80v-367.33q-51.66-12-87.5-53.67Q160-542.67 160-600v-280h66.67v280h56.66v-280H350v280h56.67v-280h66.66v280q0 57.33-35.83 99T350-447.33V-80h-66.67Zm410 0v-320H576.67v-296.67q0-80.33 51.5-131.83Q679.67-880 760-880v800h-66.67Z"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M754.67-589.33 781.33-616l-76-75.33V-810h-36.66v130l86 90.67Zm-602-133.34H418.33 152.67ZM228-434h-81.33H598 228ZM166-80q-15.02 0-25.17-9.01-10.16-9.01-10.16-22.32v-83.34q-24-17-37.34-45.16Q80-268 80-300.67V-692q0-80.84 84.5-113.09Q249-837.33 463-837.33q-10.33 15.33-18.83 32-8.5 16.66-14.17 34.33-135.33 2-198.17 13.33-62.83 11.34-79.16 35h265.66Q416-706 415.67-689.33q-.34 16.66 2 33.33h-271v155.33h345.66Q514-478 541-461.17q27 16.84 57 27.17H146.67v120q0 35 24.16 60.5Q195-228 228-228h344q33 0 57.17-25.5 24.16-25.5 24.16-60.5v-104.33Q670-416 686.67-416q16.66 0 33.33-2.33v117.66q0 32.67-13.33 60.84-13.34 28.16-37.34 45.16v83.34q0 13.31-10.16 22.32Q649.02-80 634-80h-26q-15.3 0-25.65-9.01Q572-98.02 572-111.33v-50H228v50q0 13.31-10.35 22.32T192-80h-26Zm520.13-412q-80.46 0-137.3-56.84Q492-605.68 492-686.33 492-766 548.67-823q56.66-57 137.33-57 81 0 137.5 56.5T880-686q0 81-56.71 137.5T686.13-492ZM250.71-274.67q23.62 0 40.12-16.54 16.5-16.53 16.5-40.16 0-23.63-16.54-40.13-16.54-16.5-40.16-16.5-23.63 0-40.13 16.54-16.5 16.54-16.5 40.17 0 23.62 16.54 40.12 16.54 16.5 40.17 16.5Zm298.66 0q23.63 0 40.13-16.54 16.5-16.53 16.5-40.16 0-23.63-16.54-40.13-16.54-16.5-40.17-16.5-23.62 0-40.12 16.54-16.5 16.54-16.5 40.17 0 23.62 16.54 40.12 16.54 16.5 40.16 16.5Z"/></svg>,
    ...Array(5).fill('')
  ]

  return (
    <div className='w-[307px] h-screen pt-[12px] bricolage-grotesque'>
      <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="49px" viewBox="0 -960 960 960" width="49px" fill="#5f6368"><path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z" /></svg>
        <span className='font-semibold text-2xl text-[#7B90B5] bricolage-grotesque pl-[16px]'>
          IITJ Insti
        </span>
      </div>
      <div className='w-full flex flex-col items-center mt-10'>
        {options.map((element,index) => {
          return (
            <Button key={index} iconSVG={icons[index]} to={paths[index]} text={element} onClick={()=>setActiveButton(index)} isActive={activeButton===index}/>
          )
        })}
      </div>
    </div>
  )
}

export default VerticalNavbar

const Button = ({ text,iconSVG='',to='/', isActive = true, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`w-full h-[92px] rounded-l-[20px] text-[20px] capitalize border-r-[11px] flex items-center justify-center
        ${isActive ? 'border-r-green-600 bg-[#EFF3FA]' : 'border-r-transparent bg-transparent'}`}
    >
      <div className='px-[17px]'>
        {iconSVG}
      </div>
      <span className='w-full text-left'>
        {text}
      </span>
    </Link>
  );
};
