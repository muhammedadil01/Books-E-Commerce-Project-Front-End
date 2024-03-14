import React, { useEffect, useState } from 'react'
import Home from '../../clientComponent/Home'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Client() {
  const [Client, setClient] = useState([])

  const navigate = useNavigate()

  const deleteclient =(_id)=>{
    axios.delete(`http://localhost:5000/deleteclient/${_id}`)
    clientData()

  }

  const clientData =()=>{
    axios.get("http://localhost:5000/clientdata").then(response=>{
      setClient(response.data)
    })
  }

  useEffect(() => {
    clientData()
  }, [])

  console.log(Client);

  
  const navigateToclient =(id)=>{
    navigate(`/clientread/${id}`)
  }

  const navigateToUpdateclient =(id)=>{
    navigate(`/clientupdate/${id}`)
  }
  
  return (
    <div style={{width:'100%',display:'flex'}} >
      <div><Home/></div>
      <div style={{width:'100%',float:'left'} }>
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Signed Status</th>
          <th>Role</th>
          <th>Phone Number</th>
          
        </tr>
      </thead>
      <tbody>
      {
          Client.map((index)=>{
        return    <tr key={index}>
            <td>{index.Name}</td>
            <td>{index.Username}</td>
            <td>{index.Email}</td>
            <td>{index.Signedstatus}</td>
            <td>{index.Role}</td>
            <td>{index.Phonenumber}</td>
            <td>
              <div className='d-grid gap-3 d-md-flex'>
              <button onClick={()=>navigateToclient(index._id)} ><i class="fas fa-book-open-reader"></i></button>
              <button onClick={()=>navigateToUpdateclient(index._id)} ><i class="far fa-pen-to-square"></i></button>
              <button onClick={()=>deleteclient(index._id)} ><i class="far fa-trash-can"></i></button>
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

export default Client