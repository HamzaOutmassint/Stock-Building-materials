import Nav from './NavController'
import ControllerTable from './ControllerTable';
import { Button } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function ControllerPage() {
    
   
    const [fullName , setFullName] = useState("")
    const [speciality , setSpeciality] = useState("")
    const [bloc , setBloc] = useState("")
    const [chicklistData , setChicklistData] = useState([])

    //get id of controler he had login
    const location = useLocation();
    const id = {id:parseInt(location.hash.slice(1))}

    useEffect(()=>{
        axios.post("http://localhost/project_atlass/getControlerInfo.php",id).then((res)=>{
            setFullName(res.data.fullName)
            setSpeciality(res.data.speciality)
        }).catch((err)=>{
            console.log(err)
        })
    })
    
    //ma3rfthach
    const validation = (e)=>{
        e.preventDefault();
        console.log(eachItem)
    }
    
    // create the curent date
    var curenteDate = new Date();
    const day=curenteDate.getDate()<10?`0${curenteDate.getDate()}`:curenteDate.getDate()
    const month = curenteDate.getMonth()<10?`0${curenteDate.getMonth()+1}`:curenteDate.getMonth()+1
    const year = curenteDate.getFullYear()
    const date=month+"/"+day+"/"+year
    return (
        <>
            <Nav fullName={fullName} speciality={speciality}/>
            <div className='px-4 pb-2'>
                <div className='flex flex-col md:flex-row gap-4 md:justify-between'>
                    <div className='flex gap-2 items-center'>
                        <input
                            className="bg-[#3C3D42] pl-2 h-9 rounded-xl sm:w-64 focus:outline none p-1 text-white text-xs"
                            type="text"
                            onChange={(e) => setBloc(e.target.value)}
                            placeholder="Enter the Bloc"
                        />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Button  style={{"backgroundColor":"#55d9aa", "color":"#000" ,"textTransform":"capitalize","fontWeight":600}} onClick={validation}>
                            Validation
                            <CheckCircleOutlineRoundedIcon style={{"fontSize":"30px" , "marginLeft":"5px"}}/>
                        </Button>
                        <span className='text-white'>
                           {date}
                        </span>
                    </div>
                </div>
                <div className='pt-2'>
                    <ControllerTable speciality={speciality} date={date} idControler={id.id} blocname={bloc} />
                </div>
            </div>
        </>
    )
}

export default ControllerPage