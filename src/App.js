import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Content2 from './components/Content2';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import "./App.css"
import { Typography } from '@mui/material';

function App() {
  const [state, setState] = useState(false);

  return (
    <div className="fade">
    <Header/>
    <div style={{display:"flex",justifyContent:"end",marginTop:"-3rem"}}>
      {state?
      <>
        <Typography sx={{color:"white",marginTop:"40px"}}>Go back</Typography>
        <ArrowCircleLeftIcon 
          sx={{color:"white",height:"4rem",width:"4rem",cursor:"pointer"}}
          onClick={()=>setState(false)}
        />
      </> 
      : 
      <>
        <Typography sx={{color:"white",marginTop:"40px"}}>Next</Typography>
        <ArrowCircleRightIcon 
          sx={{color:"white",height:"4rem",width:"4rem",cursor:"pointer"}}
          onClick={()=>setState(true)}
        />
      </>
      }
    </div>
    <div style={{display:"flex"}}>
      <Sidebar/>
      {state ? <Content2/> : <Content/>}
    </div>
  </div>
  );
}

export default App;

