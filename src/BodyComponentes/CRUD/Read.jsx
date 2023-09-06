import React, { useEffect, useState } from 'react'
import Home from '../../Headers/Home'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Read.css'

function Read() {

  const [GetData, setGetData] = useState({})
  const {id} = useParams()
  console.log(id);

    useEffect(() => {
     axios.get(`http://localhost:5000/readbook/${id}`).then((res)=>{
      setGetData(res.data)
     })
    }, [])
    
    console.log(GetData);
    
  return (
    <div style={{display:'flex',width:'100%'}}>
        <div><Home/></div>
       
       <div style={{width:'100%'}}>
       <div className="client-view-container">
      <div className="client-info">
        <h1 className="info-heading">Book Information</h1>
        <div className="info-item">
          <label className="info-label">Name:</label>
          <p className="info-text">{GetData.Name}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Author:</label>
          <p className="info-text">{GetData.Author}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Publication:</label>
          <p className="info-text">{GetData.Publication}</p>
        </div>
        <div className="info-item">
          <label className="info-label">Year:</label>
          <p className='info-tex'>
          {GetData.Year}
          </p>
        </div>
        <div className="info-item">
          <label className="info-label">Availablity:</label>
          <p className="info-text">{GetData.Availablity}</p>
        </div>
        
      </div>
    </div>
       </div>
        
        
    </div>
  )
}

export default Read