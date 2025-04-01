import React, { useEffect,useState  } from 'react'
import '../Read/read.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Books = ({ data }) => {

  const [Data, setData] = useState([]);

  useEffect(()=>{
    fetch();},[])
    const fetch =async () => {
      await axios.get("http://localhost:1000/api/v1/getBooks").then((res) =>setData(res.data));
    };
  
      
  const deletedata=async(id)=>{
      const res=await axios.delete("http://localhost:1000/api/v1/deleteBook").then((res)=>{
        
      fetch()}).catch(()=>{alert("could not deleete it")})   
  }
  
  return (

    <div class="table-wrapper">
      <h1>STUDENT DETAILS</h1>
       <table class="fl-table">
      <thead>
   
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Branch</th>
            <th>Phonenumber</th>
            <th>Email</th>
            <th>Rollnumber</th>

            <th>Update</th>
            <th>Delete</th>

        </tr>
        </thead>
      <tbody>
    {data && data.map((item,index)=>(
  <tr>
    <td>{item.name}</td>
    <td>{item.branch}</td>
    <td>{item.dept}</td>
    <td>{item.pnum}</td>
    <td>{item.rnum}</td>
    <td>{item.email}</td>

<td> <Link to='' onClick={()=>deletedata(item._id)}>Delete</Link></td>
<button>update</button>


  </tr>))}
  </tbody>
</table>

      
    </div>
  )
}

export default Books




{/* <h2>Responsive Table</h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
            <th>Header 5</th>
        </tr>
        </thead> */}
       
    