import React, { useEffect, useState } from 'react'
import Home from '../../Headers/Home'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        <div style={{width:'20%'}}><Home/></div>

        <div style={{paddingTop:'130px'}} className='col d-flex justify-content-center'>
        <MDBCard style={{width:'25rem',height:'50px',objectFit:'cover'}}>
      <MDBCardImage position='top' alt='...' src='https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80' />
      <MDBCardBody>
        <MDBCardTitle >{GetData.Name}</MDBCardTitle>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Author : {GetData.Author} </MDBListGroupItem>
        <MDBListGroupItem>Publication : {GetData.Publication} </MDBListGroupItem>
        <MDBListGroupItem>Year : {GetData.Year}</MDBListGroupItem>
        <MDBListGroupItem>Availablity : {GetData.Availablity}</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
      </MDBCardBody>
    </MDBCard>
        </div>
        
    </div>
  )
}

export default Read