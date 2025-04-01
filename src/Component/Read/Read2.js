
import React, { useEffect, useState } from "react";
import  axios from "axios";
import Read from "./Read";
const URL = "http://localhost:3500/datas ";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Read2 = () => {
  const [read2, setread2] = useState()
  useEffect(()=>{
    fetchHandler().then((data) => setread2(data.read2))
  },[]);
  console.log(read2)
  return (
    <div>
      <ul>
        {read2 && read2.map((book,i)=>(
          <div key={i}>
<Read/>
          </div>
        ))}
      </ul>
       
    </div>
  );
};

export default Read2;
   