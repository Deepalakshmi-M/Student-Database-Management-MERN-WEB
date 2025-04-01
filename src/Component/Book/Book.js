import React, { useEffect,useState} from 'react'
import axios from 'axios'
import Books from './Books'
const Book = () => {
  const [Data, setData] = useState();

  useEffect(()=>{
    const fetch =async () => {
      await axios.get("http://localhost:1000/api/v1/getBooks").then((res) =>setData(res.data.books));
    };
    fetch();
  });
  return (
    <div>
      <div>
        {Data ? (<Books data={Data} /> ):(<div>Loading..... </div>)
          }
      </div>
    </div>
  )
}

export default Book
