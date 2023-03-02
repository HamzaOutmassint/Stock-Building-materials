import Nav from './NavController'
import ControllerTable from './ControllerTable';
import { Button } from '@mui/material';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

function ControllerPage() {
    const location = useLocation();
    const [fullName , setFullName] = useState("")
    const [speciality , setSpeciality] = useState("")

    const id = {id:parseInt(location.hash.slice(1))}
    useEffect(()=>{
        axios.post("http://localhost/project_atlass/getControlerInfo.php",id).then((res)=>{
            setFullName(res.data.fullName)
            setSpeciality(res.data.speciality)
            

        }).catch((err)=>{
            console.log(err)
        })
    })

    // create the curent date
    var curenteDate = new Date();
    
    return (
        <>
            <Nav fullName={fullName} speciality={speciality}/>
            <div className='px-4 pb-2'>
                <div className='flex justify-between'>
                    <select name="list-of-blocs" id="list-of-blocs" className=' w-64 h-7  px-2 rounded-md flex items-center bg-[#3C3D42] text-white focus:outline-none'>
                        <option value="null">...</option>
                        <option value="bloc1-A">bloc A</option>
                        <option value="bloc-B">bloc B</option>
                        <option value="bloc-C">bloc C</option>
                        <option value="bloc-E">bloc E</option>
                    </select>
                    <div className='flex gap-2 items-center'>
                        <Button style={{"backgroundColor":"#55d9aa", "color":"#000" ,"textTransform":"capitalize","fontWeight":600}}>
                            Validation
                            <CheckCircleOutlineRoundedIcon style={{"fontSize":"30px" , "marginLeft":"5px"}}/>
                        </Button>
                        <span className='text-white'>
                            {curenteDate.getDate()<10?`0${curenteDate.getDate()}`:curenteDate.getDate()}/
                            {curenteDate.getMonth()<10?`0${curenteDate.getMonth()}`:curenteDate.getMonth()}/
                            {curenteDate.getFullYear()}
                        </span>
                    </div>
                </div>
                <div className='pt-2'>
                    <ControllerTable speciality={speciality}/>
                </div>
            </div>
        </>
    )
}

export default ControllerPage