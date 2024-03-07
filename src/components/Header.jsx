import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from "@mui/material/Avatar"
const Header = () => {
  return (
    <div>
         <div style={{marginTop:'50px', display:"flex",justifyContent:"center",}}>
         < InfoOutlinedIcon sx={{color:"white", marginRight: '15px'}} /> {/* Add margin-right */}
         <NotificationsNoneOutlinedIcon sx={{color:"white"}} />
         <span  style={{ marginLeft: '10px', color:"white" }}>Hi,</span>
         <span  style={{ marginLeft: '10px', color:"cyan" }}>Ajsal salim</span>
         <br/>
         <span style={{ marginLeft: '-100px',marginTop:"20px", color: "white" }}>welcome back!</span>    
         
         <Avatar sx={{marginLeft:"10px",marginTop:"-4px"}} alt="Remy Sharp" src="/Untitled.jpg"/>
      
        
         </div>
         
        
       
        

      
    </div>
  )
}

export default Header
