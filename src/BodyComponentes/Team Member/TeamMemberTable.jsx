import React from 'react'
import Home from '../../Headers/Home'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TeamMemberTable() {
    const [teamData, setteamData] = useState([])
     
    const teamdata=()=>{
        axios.get("http://localhost:5000/teammemberdata").then(response=>{
            setteamData(response.data)
          })
    }
    const deleteteam=(_id)=>{
        axios.delete(`http://localhost:5000/deleteteammember/${_id}`)
       teamdata()
    }
  
    useEffect(() => {
       teamdata();
    }, [])
    
    const navigate= useNavigate()

    const navigateToteammember =(id)=>{
        navigate(`/teammemberread/${id}`)
      }

      const navigateToUpdateteam =(id)=>{
        navigate(`/teammemberupdate/${id}`)
      }
   
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div style={{width:'100%',float:'left'}}>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Description</th>
          <th>Role</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
      {
        teamData.map((index)=>{
          return  <tr key={index}>
            <td>{index.Name}</td>
            <td>{index.Email}</td>
            <td>{index.Dateofbirth}</td>
            <td>{index.Gender}</td>
            <td>{index.Description}</td>
            <td>{index.Role}</td>
            <td>{index.Phonenumber}</td>          
            <td>
              <div className='d-grid gap-3 d-md-flex'>
              <button onClick={()=>navigateToteammember(index._id)}   ><i class="fas fa-book-open-reader"></i></button>
              <button  onClick={()=>navigateToUpdateteam(index._id)} ><i class="far fa-pen-to-square"></i></button>
              <button onClick={()=>deleteteam(index._id)}  ><i class="far fa-trash-can"></i></button>
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

export default TeamMemberTable