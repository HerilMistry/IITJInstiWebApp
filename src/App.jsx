import React, { useState } from 'react'
import { Grid, Tabs, Tab } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

import Home from './pages/Home';
import MessMenu from './pages/MessMenu';
import BusSchedule from './pages/BusSchedule';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = ["Home", "Mess Menu", "Bus Schedule", "A", "B", "C", "D", "E"];
  const icons = [<HomeIcon/>,<RestaurantMenuIcon />,<DirectionsBusIcon />]


  return (
    <Grid container sx={{ height: "100vh", bgcolor: "white", pr: 2, gap: 0}}>

      <Grid item xs={2} sx={{ bgcolor: "white", p: 2, pr: 0 }}>
        <div className='w-full py-8 pt-[12px] overflow-y-auto relative'>
          <div className='w-full flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#5f6368"><path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z" /></svg>
            <span className='font-semibold text-[22px] text-[#7B90B5] pl-[16px]'>
              IITJ Insti
            </span>
          </div>
        </div>
        <Tabs
          orientation="vertical"
          value={selectedIndex}
          onChange={(event, newIndex) => setSelectedIndex(newIndex)}
          sx={{
            "& .MuiTab-root": {
              alignItems: "center",
              fontSize: "16px",
              textTransform: "none",
              color: "#A7B2C3",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              pl: 2,
              mb: 1,
              "&.Mui-selected": {
                bgcolor: "#F0F4FF",
                color: "#002D9C",
                fontWeight: "bold",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  width: 4,
                  height: "100%",
                  bgcolor: "#6BC45E",
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px"
                },
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {menuItems.map((text, index) => (
            <Tab
              key={index}
              label={text}
              icon={icons[index]}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Grid>

      <Grid item xs={10} sx={{ py: 1, bgcolor: '#EFF3FA', mt: 3, borderTopRightRadius: 10 ,borderTopLeftRadius: 10}}>
        {selectedIndex === 0 && <Home />}
        {selectedIndex === 1 && <MessMenu />}
        {selectedIndex === 2 && <BusSchedule />}
      </Grid>
    </Grid>
  );
}

export default App
