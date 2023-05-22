import React, { useState } from 'react'
import Home from '../../../Headers/Home'
import Card from 'react-bootstrap/Card';
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
        <div style={{width:'20%'}}>
          <Home/>
        </div>
        <div style={{marginLeft:'auto',marginRight:'auto',paddingTop:'90px'}}>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'15rem'}} src="https://t4.ftcdn.net/jpg/05/21/94/81/360_F_521948178_WUlWgu8X5k2TyHH5bDJDY1tRfJEvz4CN.jpg" />
      <Card.Body>
        <Card.Title>Name : {customerdata.Name} </Card.Title>
        <Card.Text>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email : {customerdata.Email} </li>
            <li class="list-group-item">Address Line 1 : {customerdata.Address}</li>
            <li class="list-group-item">Address Line 2 : {customerdata.Address1}</li>
            <li class="list-group-item">City : {customerdata.City}</li>
            <li class="list-group-item">State : {customerdata.State}</li>
            <li class="list-group-item">Pincode : {customerdata.Pincode} </li>
            <li class="list-group-item">Country : {customerdata.Country}</li>
            
        </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default CustomerRead