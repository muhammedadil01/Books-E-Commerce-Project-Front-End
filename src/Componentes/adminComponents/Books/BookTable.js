import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Home from '../../clientComponent/Home';
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

function BookTable() {

 const navigate = useNavigate();
  const [books, setbooks] = useState([])

  const deletebook =(_id)=>{
     axios.delete(`http://localhost:5000/deletebook/${_id}`)
     fetchBook()

   }

   const fetchBook = ()=>{
    axios.get("http://localhost:5000/bookdata").then(Response=>{
     setbooks(Response.data)
    })
   }
     
  useEffect(() => { 
    fetchBook()
  },[])
  console.log(books);

  const navigateToRead =(id)=>{
    navigate(`/read/${id}`)
  }

 const navigateToUpdate =(id)=>{
    navigate(`/update/${id}`)
 }
  
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div> 
        <div style={{width:'100%',float:'left'} }>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Published</th>
          <th>Year</th>
          <th>Availablity</th>
          
        </tr>
      </thead>
      <tbody>
         {
         books.map((item)=>{  
          return  <tr key={item}>
            <td>{item.Name}</td>
            <td>{item.Author}</td>
            <td>{item.Publication}</td>
            <td>{item.Year}</td>
            <td>{item.Availablity}</td>
            <td>
              <div className='d-grid gap-3 d-md-flex'>
              <button onClick={()=>navigateToRead(item._id)}><i class="fas fa-book-open-reader"></i></button>
              <button onClick={()=>navigateToUpdate(item._id)}><i class="far fa-pen-to-square"></i></button>
              <button onClick={()=>deletebook(item._id)}><i class="far fa-trash-can"></i></button>
              </div>
            </td>
            </tr>
          
          })
          
          }

      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default BookTable