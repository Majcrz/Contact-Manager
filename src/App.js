import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {useState,useEffect} from "react"
import Addcontact from './Addcontact'
import Addcontact1 from './Addcontact1';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const Local_Storage="detailss"
const [info,setinfo]=useState(JSON.parse(localStorage.getItem(Local_Storage))||[])
const [edit,setedit]=useState({})
const [editform,setform]=useState(false)

 const contactHandler=(details)=>
 {
    setinfo([...info,{...details,id:uuidv4()}])
 }


 

useEffect(()=>{
localStorage.setItem(Local_Storage,JSON.stringify(info))
},[info])

  const contact1Handler=(id2)=>
  {
    console.log("inputsss-->",id2)
    const newcontactlist=info.filter((details1)=>{
      return details1.id!==id2
    })
    setinfo(newcontactlist)
    
  }
  const contact2Handler=(id3)=>
  {
    console.log("input111-->",id3)
    const editcontactlist=info.filter((details2)=>{

      return details2.id==id3

    })
    localStorage.setItem("editdetails",JSON.stringify(editcontactlist[0]))
    console.log("contact list",editcontactlist);
    setform(true)
  }
console.log("kjdcgkjdc",edit)
// useEffect(()=>{
//   const old_storage=JSON.parse(localStorage.getItem(Local_Storage))
//   if(old_storage){
//     setinfo(old_storage)
//   }
// },[])

  return (
    <>
<Addcontact   handler={contactHandler} state={editform}  update={edit}/>
<Addcontact1 hello={info} handler1={contact1Handler} handler2={contact2Handler}/>
    
    </>
  );
}

export default App;
