import React from 'react'
import Addcontact from './Addcontact'
import './Addcontact1.css'


export default function Addcontact1(props) {
const f = props.hello

 console.log("f--->",f)

  return (
   <>
 <center>
  {f.map((data3)=>

<div className='abc'>
<br></br>

<tr>

<th><span className='icon1'><i class="fa fa-address-book" aria-hidden="true"></i></span></th>
<th><span className='text'>{data3.name}<br></br>{data3.email}</span></th>
<th><span className='icon3'><i class="fa fa-pencil" aria-hidden="true" onClick={()=>props.handler2(data3.id)}></i></span></th>
<th><span className='icon2'><button onClick={()=> props.handler1(data3.id)}><i class="fa fa-trash" aria-hidden="true"></i></button></span></th>


</tr>

  </div>
)}
  </center>



   
   </>
  )
}
