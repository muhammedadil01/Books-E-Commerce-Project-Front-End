import React, { useEffect, useState } from 'react'
import Home from '../../Headers/Home'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CustomerTable() {
    const [customer, setcustomer] = useState([])
    
    const deletecustomer =(_id)=>{
        axios.delete(`http://localhost:5000/deletecustomer/${_id}`)
        fetchCustomer()
   
      }
    const fetchCustomer =()=>{
        axios.get("http://localhost:5000/customerdata").then(res=>{
            setcustomer(res.data)
        })
    }
    useEffect(() => {
      fetchCustomer()
    }, [])

    const navigate = useNavigate()

    const navigateTocustomer =(id)=>{
      navigate(`/customerread/${id}`)
    }
    const navigateToUpdatecustomer =(id)=>{
      navigate(`/customerupdate/${id}`)
    }
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div style={{width:'100%',float:'left'}} >
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Address1</th>
          <th>City</th>
          <th>State</th>
          <th>Pincode</th>
          <th>Country</th>
          
        </tr>
      </thead>
      <tbody>
     
       {
        customer.map((index)=>{
      return   <tr key={index} >
            <td>{index.Name}</td>
            <td>{index.Email}</td>
            <td>{index.Address}</td>
            <td>{index.Address1}</td>
            <td>{index.City}</td>
            <td>{index.State}</td>
            <td>{index.Pincode}</td>
            <td>{index.Country}</td>
            <td>
              <div className='d-grid gap-3 d-md-flex'>
              <button onClick={()=>navigateTocustomer(index._id)}  ><i class="fas fa-book-open-reader"></i></button>
              <button onClick={()=>navigateToUpdatecustomer(index._id)}  ><i class="far fa-pen-to-square"></i></button>
              <button onClick={()=>deletecustomer(index._id)}  ><i class="far fa-trash-can"></i></button>
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

export default CustomerTable