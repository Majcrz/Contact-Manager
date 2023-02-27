import React from 'react'
import './Addcontact.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addcontact({state, update, handler}) {
  console.log("props",update)
    const[inputs,changeinput] = useState({})
    const[inputs2,changeinput2] = useState(JSON.parse(localStorage.getItem("editdetails")) || "")

  const notify=(data)=>toast(data)
  const editform=state
  // const ads= props.update([0])
  // changeinput2(ads)
  console.log("ashyaaaaa",inputs2);
   const Addcontact = (event) =>
   {
    const name=event.target.name
  
    const value=event.target.value
    changeinput({...inputs,[name]:value})
   }

   const updatecontact = (event)=>
   {
      const name=event.target.name
      const value=event.target.value
      changeinput2({...inputs2,[name]:value})
   }
  
const AddSubmit = (event) =>

{
  event.preventDefault()
  if(!inputs.name || !inputs.email)
  {
    notify("Enter Something")
  }
  else{
  
  handler(inputs)
  console.log(inputs)
  changeinput("")
  }
}
const updateSubmit = (event) =>

{
  event.preventDefault()
  if(!inputs2.name || !inputs2.email)
  {
    notify("Enter Something")
  }
  else{
  
  handler(inputs2)
  console.log(inputs2)
  changeinput2("")
  }
}
   
  return (
  <>
  {editform===false && (
  <div className='mainbox'>
  <ToastContainer/>
    <div className='text'>Contact List</div><br></br>
    <hr></hr>
    <form onSubmit={AddSubmit}>

   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font'>Name:</span><input type="text"  name="name" value={inputs.name || ""} placeholder="&nbsp;&nbsp;Enter username" onChange={Addcontact}></input><br></br><br></br>

    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font'>Email:</span>&nbsp;&nbsp;<input type="email" name="email" value={inputs.email || ""} placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter email" onChange={Addcontact}></input><br></br><br></br><br></br>
   <center><button type="submit" class="btn btn-warning">ADD</button></center> 
</form>



  </div>
  
  
  )}



{editform===true && (
  <div className='mainbox'>
  <ToastContainer/>
    <div className='text'>Contact List</div><br></br>
    <hr></hr>
    <form onSubmit={updateSubmit}>

   
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font'>Name</span><input type="text"  name="name" value={inputs2.name || ""} placeholder="&nbsp;&nbsp;Enter username" onChange={updatecontact}></input><br></br><br></br>

    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font'>Email:</span>&nbsp;&nbsp;<input type="email" name="email" value={inputs2.email || ""} placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Enter email" onChange={updatecontact}></input><br></br><br></br><br></br>
   <center><button type="submit" class="btn btn-warning">UPDATE</button></center> 
</form>



  </div>
  
  
  )}
  </>
  )
}
