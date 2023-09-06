import React from 'react'
import Home from '../../../Headers/Home'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function TeamMemberRead() {
    const [fetchData, setfetchData] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/readteammember/${id}`).then((res)=>{
            setfetchData(res.data)
        })
    }, [])
    
  return (
    <div style={{display:'flex',width:'100%'}}>
        <div><Home/></div>
        <div style={{width:'100%'}}>
        <div className="client-view-container">
      <div className="client-info">
        <h1 className="info-heading">Team Member Information</h1>
        <div className="info-item">
          <label className="info-label">Name:</label>
          <p className="info-text">{fetchData.Name}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Email:</label>
          <p className="info-text">{fetchData.Email}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Date Of Birth</label>
          <p className='info-tex'>
          {fetchData.Dateofbirth}
          </p>
        </div>
        <div className="info-item">
          <label className="info-label">Gender</label>
          <p className='info-tex'>
          {fetchData.Gender}
          </p>
        </div>
        <div className="info-item">
          <label className="info-label">Role</label>
          <p className="info-text">{fetchData.Role}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Description</label>
          <p className="info-text">{fetchData.Description}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Phone Number</label>
          <p className="info-text">{fetchData.Phonenumber}</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default TeamMemberRead