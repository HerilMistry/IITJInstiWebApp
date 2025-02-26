import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography } from "@mui/material";
import MealTimeline from '../components/messmenu/MealTimeline.jsx';
import BlueButton from '../components/messmenu/BlueButton.jsx';
import ViewPaidExtrasButton from '../components/messmenu/ViewPaidExtrasButton.jsx';
import data from '../data/messmenu.json'


const MessMenu = () => {
  const date = new Date;
  const day = date.getDay()

  const [dayIndex, setDayIndex] = useState((day == 0) ? 6 : day - 1);
  const [selectedOptions, setSelectedOptions] = useState(['Veg', 'Non-Veg', 'Jain'])

  const menuData = data.menuData[dayIndex]

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const options = ['Veg', 'Non-Veg', 'Jain']
  const colors = ['#75FB4C', '#F19E39', '#75FBFD']

  const toggleOption = (value) => {
    if (selectedOptions.includes(value)) {
      if (selectedOptions.length > 1) {
        setSelectedOptions(selectedOptions.filter((element, _) => element !== value))
      }
    }
    else {
      setSelectedOptions([...selectedOptions, value])
    }
  }

  return (
    <div className='w-full flex justify-end pl-32 pr-10 py-2'>
      <Box sx={{ width: "100%" }}>
        <div className='text-[#132E9E] font-semibold text-2xl mb-5'>
          Mess Menu 👩‍🍳
        </div>

        <Tabs
          value={dayIndex}
          onChange={(event, newValue) => setDayIndex(newValue)}
          TabIndicatorProps={{
            style: { backgroundColor: "#97DB50", height: "8px" },
          }}
          variant="fullWidth"
        >
          {days.map((element, index) => <Tab value={index} label={element} />)}
        </Tabs>
        <div className='w-[96.8%] h-0.5 bg-[#B4B7C2] -mt-2 mx-4'></div>
        <div className='flex py-4 mt-6 pr-3 justify-between'>
          <div className='flex  space-x-2'>
            {options.map((element, index) =>
              <BlueButton
                onClick={() => toggleOption(element)}
                isSelected={selectedOptions.includes(element)}
                isDisabled={selectedOptions.includes(element) && selectedOptions.length == 1}
                text={element}
                key={index} iconColor={colors[index]} >
              </BlueButton>)}
          </div>
          <ViewPaidExtrasButton/>
        </div>

        <Typography>
          <MealTimeline menuData={menuData} selectedOptions={selectedOptions} />
        </Typography>
      </Box>
      <a href='https://www.google.com' target='__blank' className='text-[10px] flex items-center text-nowrap h-8 hover:text-[#132E9E] hover:underline'>
        Report Mess Issue ↗
      </a>
    </div>
  )
}

export default MessMenu



