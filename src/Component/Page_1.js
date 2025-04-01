import React from 'react'
import '../Component/Page_1.css'
import { useNavigate } from 'react-router-dom'


export const Page_1 = () => {
  const navigate = useNavigate();

  const createpg=()=>{
   navigate('/create')
  }



return (
  <div className='body' >
    <div className='h1center'>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      
  <h1>
  <span>STUDENT</span> &nbsp;
  <span>DATABASE</span> &nbsp;
   <span>MANAGEMENT</span>  &nbsp;
  <span>SYSTEM</span>
 
</h1>
</div>
<br/>
<button className='button1' onClick={createpg} >Get Started</button>

  </div>



  
  )
}

export default Page_1