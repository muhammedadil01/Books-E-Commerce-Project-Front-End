import React, { useEffect, useState } from 'react'
import Home from '../../clientComponent/Home'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ClientRead() {

    const [clientData, setclientData] = useState({})

    const {id} = useParams()
     console.log(id);

     useEffect(() => {
        axios.get(`http://localhost:5000/readclient/${id}`).then((res)=>{
            setclientData(res.data)
        })
     }, [])
     
    console.log(clientData);
  return (
    <div style={{display:'flex',width:'100%'}}>
        <div style={{width:'20%'}}><Home/></div>
         <div style={{marginLeft:'auto',marginRight:'auto',paddingTop:'100px'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" />
      <Card.Body>
        <Card.Title>Name : {clientData.Name} </Card.Title>
        <Card.Text>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Username : {clientData.Username} </li>
            <li class="list-group-item">Email : {clientData.Email} </li>
            <li class="list-group-item">Signed Status : {clientData.Signedstatus} </li>
            <li class="list-group-item">Role : {clientData.Role} </li>
            <li class="list-group-item">Phone Number : {clientData.Phonenumber} </li>
            
        </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </div> 
    </div>
  )
}

export default ClientRead