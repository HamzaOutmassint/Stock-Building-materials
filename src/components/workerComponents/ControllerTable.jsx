import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

// style for inputs
const InputStyle = 'bg-[#4B484C] rounded-sm focus:outline none p-1 text-white text-xs'

const rows = [
  createData('hamza',<input type="number" className={InputStyle} />,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('hicham',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('youssef',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('norddin',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('salah',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('walid',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{"borderRadius":"10px", "backgroundColor":"#3C3D42"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 , "paddingLeft":"30px"}}>Designation</TableCell>
            <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>quantity_Completed</TableCell>
            <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>the_remaining_quantity</TableCell>
            <TableCell align="right" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 ,  "paddingRight":"30px"}}>Number_of_Persons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-[#1F2025]">
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{"color":"#fff","paddingLeft":"30px"}}>{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}