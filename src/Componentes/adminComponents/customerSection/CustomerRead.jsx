import React, { useState } from 'react'
import Home from '../../clientComponent/Home'
import './CustomerRead.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function CustomerRead() {
    const [customerdata, setcustomerdata] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/readcustomer/${id}`).then((res)=>{
            setcustomerdata(res.data)
        })
    }, [])
   
  return (
    <div style={{display:'flex',width:'100%'}}>
        <div>
          <Home/>
        </div>
        <div style={{width:'100%'}}>
        <div className="client-view-container">
      <div className="client-info">
        <h1 className="info-heading">Customer Information</h1>
        <div className="info-item">
          <label className="info-label">Name:</label>
          <p className="info-text">{customerdata.Name}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Email:</label>
          <p className="info-text">{customerdata.Email}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Address Line 1:</label>
          <p className="info-text">{customerdata.Address}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Address Line 1:</label>
          <p className='info-tex'>
          {customerdata.Address1}
          </p>
        </div>
        <div className="info-item">
          <label className="info-label">City:</label>
          <p className="info-text">{customerdata.City}</p>
        </div>
        <div className="info-item">
          <label className="info-label">State:</label>
          <p className="info-text">{customerdata.State}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Pincode:</label>
          <p className="info-text">{customerdata.Pincode}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Country:</label>
          <p className="info-text">{customerdata.Country}</p>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default CustomerRead