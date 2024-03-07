import React from 'react'
import Button from "./contentcomponents/Button"
import Select3 from "./contentcomponents/Select3"
import Table from "./contentcomponents/Table";
import WestSharpIcon from '@mui/icons-material/WestSharp';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';

const Content = () => {

 
    const style2 = {
        width: '73rem',
        height: '68rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginTop:"2.5rem",
        marginLeft:"50px",
        
      };
      const style3 = {
        width: '20rem',
        height: '29.5rem',
        backgroundColor: 'black',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginLeft:"20px",
        display:"flex",
        flexDirection:"column",
      };
      const style4={
        width: '18rem',
        height: '4.5rem',
        backgroundColor: '#f27edf',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginTop:"1rem",
        marginLeft:"0.9rem",
        color:"white",
        display:"flex",
        alignItems:"center",
        

      }
      const style5={
        width: '18rem',
        height: '4.5rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginTop:"1rem",
        marginLeft:"0.9rem",
        color:"white",
        display:"flex",
        alignItems:"center",
       
        

      }
      const style6={
        backgroundColor: 'black',
        border: '2px solid #f27edf', 
        borderRadius:"7px",
        marginTop:"1rem",
        marginLeft:"0.9rem"
        
        

      }
      const style7={
        width: '780px',
        height: '3rem',
        backgroundColor: 'black',
        border: '2px solid #f27edf', 
        borderRadius:"2px",
        display:"flex",justifyContent:"center",alignItems:"center"
        
        

      }
      const style8={
        width: '500px',
        height: '1.8rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"0.2rem",
        marginTop:"-10px",
        marginLeft:"20px",
        color:"White"
      

      }
      const style9={
        width: '500px',
        height: '1.8rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"0.2rem",
        marginLeft:"20px",
        marginTop:"10px",
        color:"White"
        
      

      }
      const buttonstyle={
        width:"12rem",
        height:"3.5rem",
        backgroundColor:"#f27edf",
        boxShadow: "inset 0px 0px 5px 1px black",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"0.5rem",
        marginLeft:"300px",
        marginTop:"15px",
        border: '2px solid #f27edf', 




      }

      const elements = []; 

      for (let i = 0; i < 4; i++) {
        elements.push(
          <div style={style5} key={i}>
            <div style={{display:"flex",alignItems:"center"}}>
              <span style={{marginLeft:"15px",marginTop:"-10px"}}>Meeting Room {i+2} </span>
              <StarIcon sx={{color:"#f27edf",marginTop:"-9px",marginLeft:"5px"}}/>
              <span style={{marginLeft:"15px",marginTop:"-10px",fontSize:"0.8rem",color:"#f27edf"}}>12 Positions </span>
            </div>
            <div style={{marginLeft:"-230px",marginTop:"24px",fontSize:"0.7rem"}}>
              Start from 12 Jan, 2023-Ends at 15 Jan,2023
            </div>
          </div>
        );
      }
      
  return (
   
    <div style={style2}>
     <div>
  <h1 style={{color:"white",marginLeft:"25px"}}>
    Event Name 
    <span style={{fontSize: '0.75em'}}> (Venue Details)</span>
  </h1>
  <Button/>
  <div style={{display: "flex", alignItems: "center"}}>
    <div style={{display:"flex",flexDirection:"column"}} >
      <h3 style={{color:"white",fontSize:"1.5rem",marginLeft:"20px"}}>Assign Coordinator</h3>
      <Select3/>
    <h5 style={{color:"#f27edf",marginLeft:"20px",marginTop:"1px"}}>Add New Coordinator</h5>
    <h3 style={{color:"white",fontSize:"1.5rem",marginLeft:"20px",marginTop:"-5px"}}>Assign Contractor</h3>
      

    </div>
    <div style={{display:"flex",flexDirection:"column",marginTop:"-10px"}}>
      <h3 style={{color:"white",fontSize:"1.5rem",marginTop:"-50px",marginLeft:"17px"}}>Event Name<span style={{fontSize:"1rem"}}>(Venue Here)</span></h3>
      <div style={{...style8, display: 'flex'}}>
        <span>Start: 12-12-2023</span>
        <span style={{marginLeft: '150px'}}>End: 15-12-2013</span>
      </div>


       <div style={style9}>
       <span>Venue Address: </span>
       <span style={{fontSize:"0.9rem"}}>Some location 12, Name Here,City,State</span>


      </div>
      </div>
  
  </div>
 
</div>

     <div style={{display:"flex"}}>
     <div style={style3}>
     <div style={style4}>
            <div style={{display:"flex",alignItems:"center"}}>
              <span style={{marginLeft:"15px",marginTop:"-10px"}}>Meeting Room 1 </span>
              <StarIcon sx={{color:"##fc49df",marginTop:"-9px",marginLeft:"5px"}}/>
              <span style={{marginLeft:"15px",marginTop:"-10px",fontSize:"0.8rem",color:"black"}}>12 Positions </span>
            </div>
            <div style={{marginLeft:"-230px",marginTop:"24px",fontSize:"0.7rem"}}>
              Start from 12 Jan, 2023-Ends at 15 Jan,2023
            </div>
          </div>
       <div>
           {elements}
       </div>



     </div>
    <div>
    <h3 style={{color:"white",marginTop:"-10px",marginLeft:"13px"}}>Positions</h3>
     <div style={style6}>
    
     
     <Table/>
     <div style={style7}>
         <WestSharpIcon sx={{color:"white"}}/>
         <CircleOutlinedIcon sx={{color:"White",marginLeft:"10px",height:"13px"}}/>
         <CircleIcon sx={{color:"#f27edf",marginLeft:"10px",height:"20px"}}/>
         <EastSharpIcon sx={{color:"#a7a8a7",marginLeft:"10px"}}/>


     </div>
     
     
     
     </div>
     <button style={buttonstyle} >Save Edits</button>
     </div>
    
     </div>
  </div>
     
   
  )
}

export default Content
