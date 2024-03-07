import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">Event Details</Button>,
  <Button sx={{backgroundColor:"#f27edf",color:"white"}} key="two">Assign Coordinator/coordinator</Button>,
  <Button key="three">Session Management</Button>,
  <Button key="FOUR">Generate SOW</Button>,
  
];

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        marginLeft:"20px",
        '& > *': {
          m: 1,
        },
      }}
    >
     
      <ButtonGroup color="secondary" aria-label="Medium-sized button group">
        {buttons}
      </ButtonGroup>
    
    </Box>
  );
}