import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {useState , useEffect} from "react";

function createData(name,Quantity_Completed, The_remaining_quantity, Number_of_Persons) {
  return { name,Quantity_Completed, The_remaining_quantity, Number_of_Persons };
}

// style for inputs
const InputStyle = 'bg-[#4B484C] rounded-sm focus:outline none p-1 text-white text-xs'

export default function BasicTable({speciality}) {
  const [designation , setDesignation] = useState([])

  useEffect(()=>{
    axios.post("http://localhost/project_atlass/getDesignation.php",{speciality:speciality}).then((res)=>{
      setDesignation(res.data.designationName)
    }).catch((err)=>{
      console.log(err)
    })
  })

  const affi = designation?.map((ele)=>(
   createData(ele.designationName,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>)

  ))


  // const rows = [
  //   // createData('hamza',<input type="number" className={InputStyle} />,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('hicham',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('youssef',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('norddin',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('salah',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   createData('walid',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  //   // createData('brahim',<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>,<input type="number" className={InputStyle}/>),
  
    
  
  // ];

  


  return (
    <TableContainer component={Paper} style={{"borderRadius":"10px", "backgroundColor":"#3C3D42"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 , "paddingLeft":"30px"}}>Designation</TableCell>
            <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>Quantity_Completed</TableCell>
            <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>The_remaining_quantity</TableCell>
            <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 ,  "paddingRight":"30px"}}>Number_of_Persons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-[#1F2025]">
          {affi?.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" style={{"color":"#fff","paddingLeft":"30px"}}>{row.name}</TableCell>
              <TableCell align="center">{row.Quantity_Completed}</TableCell>
              <TableCell align="center">{row.The_remaining_quantity}</TableCell>
              <TableCell align="center">{row.Number_of_Persons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}