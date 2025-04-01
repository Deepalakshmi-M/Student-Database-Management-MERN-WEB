



  //const { id,name,dob,email,pnum,dept,branch} = props.book;

import React from 'react'
  const Read = (props) => {
    const {name,dob,email,pnum,dept,branch} = props.book;

  return (
    
          <div>
    <table>
  
   <tr className='header'>
  <td>name</td>
<td>DOB</td>
     <td>DEPARTMENT</td>
       <td>BRANCH</td>
          <td>EMAIL</td>
          <td>PHONENUMBER</td>
           <td>UPDATE</td>
          <td>DELETE</td>
          </tr >
  
<tr className='header'>
       <td>{name}</td>
        <td>{dob} </td>
       <td>{dept}</td>
       <td>{branch}</td>
       <td>{email}</td>
        <td>{pnum}</td>
</tr >
   </table>
    </div>
  )
}

export default Read;

