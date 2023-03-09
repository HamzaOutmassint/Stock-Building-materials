import Nav from "./NavAdmin"
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";

// this for style model
const style = {
  position: 'absolute', top: '45%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 680,
  height:"auto" ,  bgcolor: 'background.paper',
  boxShadow: 24, p: 4,
  backgroundColor:"#26272C",
  color:"#fff",
  borderRadius:"5px"
};

function MyAccount() {
  /*-------------------------this for moduls---------------------*/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ setOpen(false)} 
  const [ErroreMsg, setErroreMsg] = useState(false);
  /*-------------------------------end---------------------------*/
  /*--------------------------all functions here-----------------*/
  const EditName=(e)=>{
    e.preventDefault()
    var first_name = document.getElementById("first_name").value
    var last_name = document.getElementById("last_name").value
    if(first_name === "" || last_name === ""){
        setErroreMsg(true)
    }else{
        // const newFullName = {first_name:first_name , last_name:last_name ,token:localStorage.getItem("auth_token")}
        // axios.post('http://localhost/data/updateFullNameOfCustomer.php',newFullName).then((response) => {
        // setReloadInChanges([...reloadInChanges , newFullName])
        // handleClose()
        // setErroreMsg(false)
        // }).catch((error)=> {
        // console.log(error);
        // });
        console.log("yeeeh")
        setErroreMsg(false)
    }
  }
  /*--------------------------end functions part-----------------*/
  return (
    <>
    <Nav />
    <div className=" bg-[#1F2025] w-2/3 m-auto text-white rounder-lg mt-7 h-96 px-24 py-7">
      <div className="mb-10">
        <h5 className="text-xl font-semibold">Personal information</h5>
        <span className="text-xs		 font-thin">Manage your personal information, here you can edit your fullname , username and password</span>
      </div>
      <div className="mb-4">
        <h6 className="text-sm font-semibold text-[#D8B5B5]">Account holder</h6>
        <p className="text-md font-medium mt-1"> 
          <span className="mr-2">Salaheddine Hamza</span>
          <abbr title="edit"><button onClick={()=>handleOpen()}><EditIcon sx={{ fontSize: 17 }}/></button></abbr>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <h6 className="text-xs">EDIT YOUR NAME</h6> 
                {
                  ErroreMsg === true ? <div className="bg-[#f31c40] mt-2" style={{"fontSize":"18px","padding":"5px"}}>Not all the fields have been filled out correctly!</div> : null
                } 
                <form>
                    <div className="flex flex-col my-3">
                        <label className="mb-1" style={{"fontSize":"14px"}}>FIRST NAME *</label>
                        <input type="text" name="first_name" placeholder="Enter your first name" id="first_name" className="rounded focus:outline none bg-[#3C3D42] text-xs py-1 pl-2"/>
                    </div>
                    <div className="flex flex-col my-3">
                        <label className="mb-1" style={{"fontSize":"14px"}}>LAST NAME *</label>
                        <input type="text" name="last_name" placeholder="Enter your last name" id="last_name" className="rounded focus:outline none bg-[#3C3D42] text-xs py-1 pl-2"/>
                    </div>
                    <button onClick={(e)=>EditName(e)} className="bg-[#087285] hover:bg-[#0889a0] text-sm p-1 rounded-md px-2 transition duration-300">
                      Save changes
                    </button>
                </form>
            </Box>
          </Modal>
        </p>
      </div>
      <div className="mb-4">
        <h6 className="text-sm font-semibold text-[#D8B5B5]">Username</h6>
        <p className="text-md font-medium mt-1">
         <span className="mr-2">root</span> 
          <abbr title="edit"><button><EditIcon sx={{ fontSize: 17 }}/></button></abbr>
        </p>
      </div>
      <div>
        <h6 className="text-sm font-semibold text-[#D8B5B5]">Password</h6>
        <p className="text-md font-medium mt-1 flex itmes-center">
          <span>*************</span>
          <abbr title="edit" className="leading-none ml-2"><button><EditIcon sx={{ fontSize: 17 }}/></button></abbr>
        </p>
      </div>
    </div>
    </>
  )
}

export default MyAccount