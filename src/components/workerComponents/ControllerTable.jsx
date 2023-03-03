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
import Button from '@mui/material/Button';

function createData(name,Quantity_Completed, The_remaining_quantity, Number_of_Persons) {
  return { name,Quantity_Completed, The_remaining_quantity, Number_of_Persons };
}

// style for inputs
const InputStyle = 'bg-[#4B484C] rounded-sm focus:outline none p-1 text-white text-xs text-center'

export default function BasicTable({speciality , pushItem}) {
  const [designation , setDesignation] = useState([])
 
  const [eachItem , setEachItem] = useState({designation:"",Quantity_Completed:"",The_remaining_quantity:"",Number_of_Persons:""})



  useEffect(()=>{
    if(speciality !== ""){
      axios.post("http://localhost/project_atlass/getDesignation.php",{speciality:speciality}).then((res)=>{
        setDesignation(res.data.designationName)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },[speciality])

  const handlChange=(e)=>{
    const designationName = e.target.id
    if(eachItem.designation==""){
    setEachItem((prev)=>(
      {...prev , [e.target.name] : e.target.value ,designation:designationName}
    ))
  }else if (designationName==eachItem.designation){
    setEachItem((prev)=>(
      {...prev , [e.target.name] : e.target.value ,designation:designationName}
    ))
  }
}


  console.log(eachItem)
  const afficherDonner = designation?.map((ele,key)=>(
   createData(
    ele.designationName,
    <input type="number" id={ele.designationName} defaultValue="0" name='Quantity_Completed' onChange={(e)=>handlChange(e)}  className={InputStyle}/>,
    <input type="number" id={ele.designationName} defaultValue="0" name='The_remaining_quantity' onChange={(e)=>handlChange(e)} className={InputStyle}/>,
    <input type="number" id={ele.designationName} defaultValue="0" name='Number_of_Persons' onChange={(e)=>handlChange(e)} className={InputStyle}/>
   )
  ))

  if(designation.length !== 0){
    return(
      <TableContainer component={Paper} style={{"borderRadius":"10px", "backgroundColor":"#3C3D42"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 , "paddingLeft":"30px"}}>Designation</TableCell>
              <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>Quantity_Completed</TableCell>
              <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600}}>The_remaining_quantity</TableCell>
              <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 ,  "paddingRight":"30px"}}>Number_of_Persons</TableCell>
              <TableCell align="center" style={{"color":"#fff" , "fontSize":"20px" , "fontWeight":600 ,  "paddingRight":"30px"}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#1F2025]">
            {afficherDonner?.map((row , index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{"color":"#fff","paddingLeft":"30px"}}>{row.name}</TableCell>
                <TableCell align="center">{row.Quantity_Completed}</TableCell>
                <TableCell align="center">{row.The_remaining_quantity}</TableCell>
                <TableCell align="center">{row.Number_of_Persons}</TableCell>
                <TableCell align="center">
                  <Button style={{"backgroundColor":"#BBE1FA", "color":"#1b1919" ,"textTransform":"lowercase","fontWeight":600,"width": "100px"}}
                    onClick={func}>
                    valid
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}