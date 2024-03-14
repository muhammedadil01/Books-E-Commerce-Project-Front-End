import React, { useEffect, useState } from 'react'
import Home from '../../clientComponent/Home'
import Table from 'react-bootstrap/esm/Table'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function OrderTable() {
 const [orderData, setorderData] = useState([])

  const orderdata=()=>{
    axios.get("http://localhost:5000/orderdata").then(response=>{
        setorderData(response.data)
      })
}
 const deleteorder=(_id)=>{
  axios.delete(`http://localhost:5000/deleteorder/${_id}`)
 orderdata()
}
  useEffect(() => {
    orderdata()
  }, [])
 const navigate = useNavigate()

  const navigateToorder =(id)=>{
    navigate(`/orderread/${id}`)
  }

  const navigateToUpdateorder =(id)=>{
    navigate(`/orderupdate/${id}`)
  }
  
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div style={{width:'100%',float:'left'}}>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Order Id</th>
          <th>Product Number</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {
        orderData.map((index)=>{
          return  <tr key={index}>
            <td>{index.Firstname}</td>
            <td>{index.Lastname}</td>
            <td>{index.Orderid}</td>
            <td>{index.Productnumber}</td>
            <td>{index.Date}</td>       
            <td>
              <div className='d-grid gap-3 d-md-flex'>
              <button onClick={()=>navigateToorder(index._id)} ><i class="fas fa-book-open-reader"></i></button>
              <button onClick={()=>navigateToUpdateorder(index._id)} ><i class="far fa-pen-to-square"></i></button>
              <button onClick={()=>deleteorder(index._id)}  ><i class="far fa-trash-can"></i></button>
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

export default OrderTable