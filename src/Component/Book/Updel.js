import React,{useState} from 'react'
import axios from 'axios';
const UpDel = () => {


//     console.log(Data)
const [Data, setData] = useState([]);

useEffect(()=>{
  fetch();},[])
  const fetch =async () => {
    await axios.get("http://http://localhost:3001/book").then((res) =>setData(res.data.books));
  };

    
const deletedata=async(id)=>{
    const res=await axios.delete("http://localhost:1000/api/v1/deleteBook").then((res)=>{
      
    }).catch(()=>{alert("could not deleete it")})   
}



      return (
        <div>
              <div className='line'></div>
    
    <div>
      <div>&nbsp;
      <h5> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student registration</h5>
      </div>
      <form>
      <label>*Enter Your Name </label>
      <br/>
      <input type='text' value={Data.name} onChange={change} name='name'/><br/>
    
      <br/><label>*Enter Your Department </label>
      
      <br/><input type='text' value={Data.dept} onChange={change} name='dept'/><br/>
      <br/><label>*Enter Your Branch </label>
      
      <br/><input type='text' value={Data.branch} onChange={change} name='branch'/><br/>
      <br/><label>*Enter Your Phonenumber </label>       
      <br/> <input type='text' value={Data.pnum} onChange={change} name='pnum'/><br/>
      <br/>
      <button onClick={()=>deletedata(item._id)}>Click</button>
      </form>
      </div> </div>
)}

export default UpDel