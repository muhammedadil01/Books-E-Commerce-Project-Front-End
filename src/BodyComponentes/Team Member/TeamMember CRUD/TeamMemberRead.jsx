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
        <div style={{width:'20%'}}><Home/></div>
        <div style={{marginLeft:'auto',marginRight:'auto',paddingTop:'95px'}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>Name : {fetchData.Name} </Card.Title>
        <Card.Text>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email : {fetchData.Email} </li>
            <li class="list-group-item">Date Of Birth : {fetchData.Dateofbirth} </li>
            <li class="list-group-item">Gender : {fetchData.Gender} </li>
            <li class="list-group-item">Description : {fetchData.Description} </li>
            <li class="list-group-item">Role : {fetchData.Role} </li>
            <li class="list-group-item">Phone Number : {fetchData.Phonenumber} </li>   
        </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default TeamMemberRead