import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Edit = () => {
  const [name, setName] = useState('')
const [dept, setDept] = useState('')
const [branch, setBranch] = useState('')
const [pnum, setPnum] = useState('')
const [rnum, setRnum] = useState('')
const [email, setEmail] = useState('')


//id added
const [id, setId] = useState('')


const navigate = useNavigate();


//function postdata to DB(MOckAPI DB)

const putdata=async()=>{
  await axios.put("http://localhost:3500/datas",{
    name,
    dept,
    branch,
    pnum,
    rnum,
    email
//postvalue from name loc,pass;

  })
  navigate('/book')
}

useEffect(()=>{
  setId(localStorage.getItem('id',id))
  setName(localStorage.getItem('name', name))
  setDept(localStorage.getItem('dept', dept))
  setBranch(localStorage.getItem('branch', branch))
  setPnum(localStorage.getItem('pnum',pnum))
  setPnum(localStorage.getItem('rnum',rnum))
  setPnum(localStorage.getItem('email',email))






},[])
  return (
    
<div>
<input value={name} onChange={event=>setName(event.target.value)}/>
<input  value={dept} onChange={event=>setDept(event.target.value)}/>
<input  value={branch} onChange={event=>setBranch(event.target.value)}/>
<input value={pnum} onChange={event=>setPnum(event.target.value)}/>
<input value={rnum} onChange={event=>setRnum(event.target.value)}/>
<input value={email} onChange={event=>setEmail(event.target.value)}/>

<button onClick={putdata}>Click Here</button>
</div>


  )
}

export default Edit