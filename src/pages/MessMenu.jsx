import React, { useState } from 'react'
import MealTimeline from '../components/messmenu/MealTimeline.jsx';
import data from '../data/messmenu.json'

const MessMenu = () => {
  const date = new Date;
  const day = date.getDay()

  const [dayIndex, setDayIndex] = useState((day == 0) ? 6 : day - 1);
  const [selectedOptions, setSelectedOptions] = useState(['Veg', 'Non-Veg', 'Jain'])
  
  const menuData= data.menuData[dayIndex]

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const options = ['Veg', 'Non-Veg', 'Jain']
  const colors = ['#75FB4C', '#F19E39', '#75FBFD']

  const toggleOption = (value) => {
    if (selectedOptions.includes(value)) {
      if( selectedOptions.length > 1){
        setSelectedOptions(selectedOptions.filter((element, _) => element !== value))
      }
    }
    else {
      setSelectedOptions([...selectedOptions, value])
    }
  }

  return (
    <div className='w-full flex justify-end px-6 py-2'>
      <div className='w-5/6 pl-2 pr-4'>
        <div className='text-[#132E9E] font-semibold text-2xl'>
          Mess Menu 👩‍🍳
        </div>
        <div className='w-full flex justify-between mt-6 px-4 pb-2'>
          {days.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => setDayIndex(index)}
                className={`uppercase cursor-pointer font-semibold py-1 px-5 pb-3 border-b-8  ${(dayIndex === index) ? 'text-black border-[#97DB50]' : 'text-[#687A8C] border-transparent'}`}
              >
                {element}
              </button>
            )
          })}
        </div>
        <div className='w-[96.8%] h-0.5 bg-[#B4B7C2] -mt-4 mx-4'></div>
        <div className='flex py-4 space-x-2'>
          {options.map((element, index) =>
            <BlueButton
              onClick={() => toggleOption(element)}
              isSelected={selectedOptions.includes(element)}
              isDisabled={selectedOptions.includes(element) && selectedOptions.length==1}
              text={element}
              key={index} iconColor={colors[index]} ></BlueButton>)}
        </div>
        <MealTimeline menuData={menuData} selectedOptions={selectedOptions}/>
      </div>
      <a href='https://www.google.com' target='__blank' className='text-[10px] flex items-center h-8 hover:text-[#132E9E] hover:underline'>
        Report Mess Issue ↗
      </a>
    </div>
  )
}

export default MessMenu



const BlueButton = ({ text, iconColor, isSelected, isDisabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`flex items-center gap-x-1 justify-between ${(isSelected) ? 'bg-[#4661D1]' : 'bg-gray-400'} text-white pl-3 pr-1 py-1 -tracking-tighter rounded-3xl cursor-pointer transition duration-100 disabled:bg-[#4662d1a2]`}>
      <span><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill={iconColor}><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg></span>
      <span>{text} </span>
      <span className='pb-[2px] pr-2 text-sm w-6'>{isSelected ? 'x' : '+'}</span>
    </button>
  );
};

