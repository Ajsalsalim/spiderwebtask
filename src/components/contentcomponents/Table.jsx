import * as React from 'react';
import Select4 from "./Select4"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Position, Time, Info, Quantity) {
  return { Position, Time, Info, Quantity };
}

const rows = [
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  createData('Camera1(Video)', "9am-7pm", "LP default", 20),
  

];

export default function BasicTable() {
  return (
    <TableContainer  component={Paper}>
          <Table sx={{ minWidth: 780, backgroundColor: "black", '& .MuiTableCell-root': { borderColor: '#f27edf' } }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"white"}} >Position</TableCell>
            <TableCell sx={{color:"white"}} align="right">Time</TableCell>
            <TableCell sx={{color:"white"}} align="right">Info</TableCell>
            <TableCell  sx={{color:"white"}} align="right">Quantity</TableCell>
            <TableCell   align="right">Quantity</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: "10px" }}
            >
              <TableCell  sx={{color:"white"}} component="th" scope="row">
                {row.Position}
              </TableCell>
              <TableCell  sx={{color:"white"}} align="right">{row.Time}</TableCell>
              <TableCell  sx={{color:"white"}} align="right">{row.Info}</TableCell>
              <TableCell  sx={{color:"white"}} align="right">{row.Quantity}</TableCell>
              <TableCell sx={{color:"white",}} align="right"><Select4/>
   
  </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}