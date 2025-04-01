import React, {useState} from 'react'
// import { ReactDOM,Usenavigate } from 'react'

import { useNavigate } from 'react-router-dom'
import './Create.css'
import axios from 'axios';
export const Create = () => {

const [inputs, setInputs] = useState({
  name: "",
  dept: "",
  branch: "",
  pnum:'',
  rnum:'',
  email:''

});


const navigate = useNavigate();
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
  // console.log(e.target.name, "Value", e.target.value);
};
const sendRequest = async () => {
  await axios
    .post("http://localhost:1000/api/v1/add", {
      name: String(inputs.name),
      rnum:Number(inputs.rnum),
      dept: String(inputs.dept),
      branch: String(inputs.branch),
      email: String(inputs.email),

      pnum:Number(inputs.pnum)
    })
    .then((res) => res.data);
};


const handleSubmit = (e) => {
  e.preventDefault();
  //refresh
  sendRequest().then(() => navigate("/book"));
};
return (
    // <div  className='body2'>
    //   <div className='line'></div>

    //   <div className='form' >
    //     <div className='hed'>&nbsp;
    //     <h5> 
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
    //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student registration</h5>
    //     </div>
    //     <form onSubmit={handleSubmit}>
    //     <label>*Enter Your Name </label>
    //     <br/>
    //     <input type='text' value={inputs.name} onChange={handleChange} name='name'/><br/><br/>
     

    //     <label>*Enter Your RollNumber </label>       
    //     <br/> <input type='text' value={inputs.rnum} onChange={handleChange} name='rnum'/><br/>
    //     <br/>
    //     <br/><label>*Enter Your Department </label>
        
    //     <br/><input type='text' value={inputs.dept} onChange={handleChange} name='dept'/><br/>
    //     <br/><label>*Enter Your Branch </label>
        
    //     <br/>
    //     <input type='text' value={inputs.branch} onChange={handleChange} name='branch'/><br/>
    //     <br/>
    //     <label>*Enter Your Email </label>       
    //     <br/> <input type='text' value={inputs.email} onChange={handleChange} name='email'/><br/>
    //     <br/>
    //     <br/><label>*Enter YourPhonenumber </label>       
    //     <br/> <input type='text' value={inputs.pnum} onChange={handleChange} name='pnum'/><br/>
       
        
    //     <button>Click</button>
    //     </form>
    //     </div>
    //     </div>
        







<div className='bdy'>  
  <div> 
   <div className="container">
  <div className="title">Registration</div>
  <div className="content">
    <form onSubmit={handleSubmit} >
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="Enter your name" value={inputs.name} onChange={handleChange} name='name'required />
        </div>
        <div className="input-box">
          <span className="details">Roll Number</span>
          <input type="text" placeholder="Enter your Roll number" value={inputs.rnum} onChange={handleChange} name='rnum'required />
        </div>
        <div className="input-box">
          <span className="details">Department</span>
          <input type="text" placeholder="Enter your department" value={inputs.dept} onChange={handleChange} name='dept' required />
        </div>
        <div className="input-box">
          <span className="details">Branch</span>
          <input type="text" placeholder="Enter your Branch" value={inputs.branch} onChange={handleChange} name='branch' required />
        </div>
        <div className="input-box">
          <span className="details">Phonenumber</span>
          <input type="text" placeholder="Enter your Phonenumber" value={inputs.pnum} onChange={handleChange} name='pnum' required />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter Your Email Address" value={inputs.email} onChange={handleChange} name='email' required />
        </div>
      </div>
      
      <div className="button">
        <input type="submit" defaultValue="Register" />
      </div>
    </form>
  </div>
</div>
   </div></div> 
     
  )
}

export default Create


 
