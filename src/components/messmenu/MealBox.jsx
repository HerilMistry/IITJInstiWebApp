import React from 'react'

function MealBox({menuData,selectedOptions}) {
    return (
      <div className="w-full flex rounded-lg bg-white gap-x-8 border-2 border-[#4661D1] shadow shadow-[#2538C61F] py-4 px-4 divide-x-2 divide-[#CDD7E4]">
        <div className="flex flex-col gap-y-4 text-sm justify-between text-[#7488DD] font-semibold -tracking-tight pr-6">
          <span>DAILY</span>
          <span>SPECIALS</span>
          <span>REGULARS</span>
        </div>
        <div className="flex flex-col gap-y-4 justify-between font-medium -tracking-tight">
          <span>{menuData.daily}</span>
          <div className="flex gap-x-2">
            {selectedOptions.includes('Veg') && <span className="flex items-center gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill='#A9CD30'><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg>
              {menuData.specials.veg}
            </span>}
            {selectedOptions.includes('Non-Veg') && <span className="flex items-center gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill='#F66063'><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg>
              {menuData.specials.nonveg}
            </span>}
          </div>
          <span>{menuData.regulars}</span>
        </div>
      </div>
    )
}

export default MealBox;