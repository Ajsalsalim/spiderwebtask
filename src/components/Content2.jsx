import React from 'react'
import Table2 from './contentcomponents/Table2';
import WestSharpIcon from '@mui/icons-material/WestSharp';
import EastSharpIcon from '@mui/icons-material/EastSharp';
import Typography from '@mui/joy/Typography';

const Content2 = () => {

    const style2 = {
        width: '73rem',
        height: '57.9rem',
        backgroundColor: 'transparent',
        border: '2px solid #f27edf', 
        borderRadius:"10px",
        marginTop:"2.5rem",
        marginLeft:"50px",
        
      };
      const style7={
        width: '1165px',
        height: '3rem',
        backgroundColor: 'black',
        border: '2px solid #f27edf', 
        borderRadius:"2px",
        display:"flex",justifyContent:"center",alignItems:"center"
        
        

      }

  return (
    <div style={style2}>
        <Table2/>
        <div style={style7}>
        <WestSharpIcon sx={{color:"white"}}/>
        <Typography sx={{marginLeft:"10px",color:"white"}}>1 2 3 </Typography>
        <Typography sx={{marginLeft:"5px", color:"#f27edf"}}>4 </Typography>
        <EastSharpIcon sx={{color:"#a7a8a7",marginLeft:"10px"}}/>
       


     </div>


        </div>
  )
}

export default Content2
