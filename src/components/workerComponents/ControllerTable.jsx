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

export default function BasicTable({speciality } ) {
  const [designation , setDesignation] = useState([])
  const [items , setItems] = useState([])
  const [eachItem , setEachItem] = useState({designation:"",Quantity_Completed:0,The_remaining_quantity:0,Number_of_Persons:0})



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

    // get name designation
    const designationName = e.target.id

    //serach if designation is found in array
    const serach = items.map((ele)=>{
      if(ele.designation==designationName){
        return true
      }})


    // insert value in first time
    if(eachItem.designation==""){
      setEachItem((prev)=>(
        {...prev , [e.target.name] : e.target.value ,designation:designationName}
      ))
    //insert value in meme obejet
    }else if (designationName==eachItem.designation){

    /// if not existe in  array 
    if (serach==false){
      setEachItem((prev)=>(
        {...prev , [e.target.name] : e.target.value ,designation:designationName}
      
        ))}else{

          //find old date
          const olddonne=items.find((ele)=>ele.designation ==designationName)
          
          //save old date to update 
          if(olddonne!=undefined){
          setEachItem({designation:"",Quantity_Completed:olddonne.Quantity_Completed,The_remaining_quantity:olddonne.The_remaining_quantity,Number_of_Persons:olddonne.Number_of_Persons})
          }
         
         
          
       //updtaing array 
        setItems( items.filter((ele)=>
         ele.designation !==designationName
           ))

       // whene have same desitination we need too insert new objet of the same designation
           setEachItem((prev)=>(
            {...prev , [e.target.name] : e.target.value ,designation:designationName}
          ))
       
      }
   //insert objet in items and get empty setEachItem
    }else if(designationName!=eachItem.designation  ){

      //appned in array items
      setItems(items => [...items,eachItem] );

      //empty setEachItem 
      setEachItem({designation:"",Quantity_Completed:0,The_remaining_quantity:0,Number_of_Persons:0})
      setEachItem((prev)=>(
        {...prev , [e.target.name] : e.target.value ,designation:designationName}
      ))
    }
    
}
  
console.log(items)
  

  const afficherDonner = designation?.map((ele,key)=>(
   createData(
    ele.designationName,
    <input type="number" id={ele.designationName} defaultValue={0} name='Quantity_Completed' onChange={(e)=>handlChange(e)}  className={InputStyle}/>,
    <input type="number" id={ele.designationName} defaultValue={0} name='The_remaining_quantity' onChange={(e)=>handlChange(e)} className={InputStyle}/>,
    <input type="number" id={ele.designationName} defaultValue={0} name='Number_of_Persons' onChange={(e)=>handlChange(e)} className={InputStyle}/>
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
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#1F2025]">
            {afficherDonner?.map((row , index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" style={{"color":"#fff","paddingLeft":"30px"}}>{row.name}</TableCell>
                <TableCell align="center">{row.Quantity_Completed}</TableCell>
                <TableCell align="center">{row.The_remaining_quantity}</TableCell>
                <TableCell align="center">{row.Number_of_Persons}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}