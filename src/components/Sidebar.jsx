import React from 'react'
import Select1 from './sidebarcomponents/Select1';
import Select5 from "./contentcomponents/Select5"
import Button1 from './sidebarcomponents/Button1';
import Button2 from './sidebarcomponents/Button2';
import Button3 from './sidebarcomponents/Button3';
import Button4 from './sidebarcomponents/Button4';
import Button6 from './sidebarcomponents/Button6';
import Button5 from './sidebarcomponents/Button5';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    const style1 = {
        width: '16rem',
        height: '57.9rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginTop:"2.5rem",
        marginLeft:"4rem",
        display:"flex",
        flexDirection:"column"
      };
      
      

  return (
    <div  style={style1}>
        <Select1 />
        <div style={{position: 'relative',marginLeft:"50px"}}>
  <div style={{height: '160px', width: '1px', backgroundColor: 'white'}} />
  <div style={{position: 'absolute', top: '40px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}} ><div style={{marginTop:"-1rem"}}><Select5/></div></div>
  <div style={{position: 'absolute', top: '80px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}} ><div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button1/></div></div>
  <div style={{position: 'absolute', top: '120px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}}><div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button2/></div></div>
  <div style={{position: 'absolute', top: '160px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}}> <div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button3/></div></div>

  <div  >
   <h5 style={{color:"white", fontSize:"1rem",fontFamily: 'sans-serif',marginLeft:"-30px"}}>Positions</h5> 
   <h5 style={{color:"white", fontSize:"1rem",fontFamily: 'sans-serif',marginLeft:"-30px"}}>Contractors</h5>
   <h5 style={{color:"white", fontSize:"1rem",fontFamily: 'sans-serif',marginLeft:"-30px"}}>Users</h5>
   <div style={{position: 'relative'}}>
   <div style={{height: '120px', width: '1px', backgroundColor: 'white'}} />
   <div style={{position: 'absolute', top: '40px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}} ><div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button4/></div></div>
  <div style={{position: 'absolute', top: '80px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}}><div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button5/></div></div>
  <div style={{position: 'absolute', top: '120px', width: '1rem',height:"0.05rem", borderRadius: '0 0 50% 1000%', border: '1px solid white', borderTop: '0',color:"white"}}> <div style={{marginTop:"-0.75rem",marginLeft:"1rem"}} ><Button6/></div></div>
  </div>
  <h5 style={{color:"white", fontSize:"1rem",fontFamily: 'sans-serif',marginLeft:"-30px"}}>Profile</h5>
  </div>

  <button style={{
  marginTop:"300px",
  marginLeft:"-22px",
  color:"white",
  backgroundColor:"black",
  border:"none",
  height:"40px",
  borderRadius:"5px",
  width:"200px",
  fontSize:"1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  <LogoutIcon/>
  <span style={{position: "relative", top: "-2px"}}>Logout</span>
</button>


 
 
</div>


 



        {/* <Select2/> */}
     
        
      
    </div>
  )
}

export default Sidebar
