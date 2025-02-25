import { useEffect, useState } from "react";

const meals = [
  { name: "Breakfast", time: "7:30 AM - 10:00 AM"},
  { name: "Lunch", time: "12:15 PM - 2:45 PM"},
  { name: "Snacks", time: "5:30 PM - 6:30 PM"},
  { name: "Dinner", time: "7:45 PM - 10:30 PM"}
];

const timings = [[730, 1000], [1215, 1445], [1730, 1830], [1945, 2330]]


export default function MealTimeline() {

  const date = new Date;
  const hours = date.getHours()
  const mins = date.getMinutes()
  const [time, setTime] = useState(hours * 100 + mins)


  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const newTime = date.getHours() * 100 + date.getMinutes();

      setTime((prevTime) => {
        if (prevTime !== newTime) {
          return newTime;
        }
        return prevTime;
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);


  return (
    <div className="w-full flex flex-col items-start pl-4 space-y-8 p-6">
      {meals.map((meal, index) => (
        <TimeSegement index={index} meal={meal} isActive={time>=timings[index][0] && time<=timings[index][1]}/>
      ))}
    </div>
  );
}

function TimeSegement({index,meal,isActive}) {

  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(isActive)? '#0E2277':'#8BA2BA'}><path d="m734-556-56-58 86-84 56 56-86 86ZM80-160v-80h800v80H80Zm360-520v-120h80v120h-80ZM226-558l-84-86 56-56 86 86-58 56Zm71 158h366q-23-54-72-87t-111-33q-62 0-111 33t-72 87Zm-97 80q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Zm280-80Z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(isActive)? '#0E2277':'#8BA2BA'}><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(isActive)? '#0E2277':'#8BA2BA'}><path d="M396-396q-32-32-58.5-67T289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396Zm57-56q51 51 114 87.5T702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452Zm290 72q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={(isActive)? '#0E2277':'#8BA2BA'}><path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" /></svg>
  ]

  return (
    <div className="flex w-full justify-between">
      <div key={index} className="relative flex flex-col w-48 space-y-1">
        <span className='absolute -left-7 top-0 w-3 h-3'>{icons[index]}</span>
        <span className={(isActive? 'bg-[#0E2277]' : 'bg-gray-400')+" absolute  -left-5 top-7 h-[136px] w-0.5"}></span>
        <div className="flex items-center">
          <h3 className="font-semibold text-gray-800">{meal.name}</h3>
        </div>
        <p className={(isActive? 'text-[#1839C6]' : 'text-gray-400')+' text-sm font-medium'}>{meal.time}</p>
      </div>
      <MealBox />
    </div>
  );
}

function MealBox() {
  return (
    <div className="w-full flex rounded-lg bg-white gap-x-8 border-2 border-[#4661D1] shadow shadow-[#2538C61F] py-4 px-4 divide-x-2 divide-[#CDD7E4]">
      <div className="flex flex-col gap-y-4 text-sm justify-between text-[#7488DD] font-semibold -tracking-tight pr-6">
        <span>DAILY</span>
        <span>SPECIALS</span>
        <span>REGULARS</span>
      </div>
      <div className="flex flex-col gap-y-4 justify-between font-medium -tracking-tight">
        <span>Methi Aaalo</span>
        <div className="flex gap-x-2">
          <span className="flex items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill='#A9CD30'><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg>
            Methi Aaalo
          </span>
          <span className="flex items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill='#F66063'><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z" /></svg>
            Methi Aaalo
          </span>
        </div>
        <span>Methi Aaalo</span>
      </div>
    </div>
  )
}

