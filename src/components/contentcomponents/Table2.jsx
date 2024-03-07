import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import { TableCell } from '@mui/material'
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Select6 from './Select6';
import AddBoxIcon from '@mui/icons-material/AddBox';




function createData(filledname,eventstart,eventend, name, number, venue, city,state,zipcode) {
  return { filledname,eventstart,eventend, name, number, venue, city,state,zipcode };
}

const rows = [
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  createData('Filled Name',"jan 12,2024","jan 14,2024", "Ajsal salim", 8425172325, "Anchal", "Kollam", "Kerala",691306),
  
  


];

export default function Table2() {
  
  return (
    <Box sx={{ width: '100%' }}>
      <div style={{display:"flex",alignItems:"center"}}>
      <Typography level="body-lg" textAlign="left" sx={{ pb: 2 ,marginLeft:"1rem",fontSize:"2.5rem",color:"White"}}>
        Event Requests
      </Typography>
     
      <Select6/>
    
    <AddBoxIcon sx={{height:"44px",color:"white",width:"44px",}}/>

      
      


      </div>
     
   
      <Sheet
        variant="outlined"
        sx={{
          backgroundColor:"transparent",
          color:"white",
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '300px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
       
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
           
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
              backgroundColor:"transparent",
              color:"white",
              backdropFilter: "blur(10px)",
             
            },
            
          }}
        >
           
          <thead>
            <tr >
              <th style={{  width: 'var(--Table-firstColumnWidth)',backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Event Name  <ExpandCircleDownRoundedIcon sx={{transform:"rotate(180deg)"}}/></th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Event Start</th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Event End <ExpandCircleDownRoundedIcon /></th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Client Name <ExpandCircleDownRoundedIcon/></th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Contact info</th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Venue</th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>City</th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>State</th>
              <th style={{ width: 200,backgroundColor:"#f27edf",color:"white",fontSize:"1.2rem" }}>Zip Code</th>
              
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr >
                <td ><div style={{marginTop:"5px",display:"flex",}}><RemoveRedEyeOutlinedIcon sx={{marginRight:"15px"}}/>{row.filledname}</div></td>
                <td style={{color:"white"}}>{row.eventstart}</td>
                <td style={{color:"white"}}>{row.eventend}</td>
                <td style={{color:"white"}}>{row.name}</td>
                <td style={{color:"white"}}>{row.number}</td>
                <td style={{color:"white"}}>{row.venue}</td>
                <td style={{color:"white"}}>{row.city}</td>
                <td style={{color:"white"}}>{row.state}</td>
                <td style={{color:"white"}}>{row.zipcode}</td>
                
                
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
}