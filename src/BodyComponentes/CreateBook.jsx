import React, { useState } from 'react'
import Home from '../Headers/Home'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const navigate = useNavigate();
    const [Name, setName] = useState("")
    const [Author, setAuthor] = useState("")
    const [Publication, setPublication] = useState("")
    const [Year, setYear] = useState("")
    const [Availablity, setAvailablity] = useState("")

    const Bname =(val)=>{
      setName(val.target.value)
    }
    const Bauthor =(val)=>{
        setAuthor(val.target.value)
    }
    const Bpublication=(val)=>{
        setPublication(val.target.value)
    }
    const Byear=(val)=>{
        setYear(val.target.value)
    }
    const Bavailablity=(val)=>{
        setAvailablity(val.target.value)
    }
    const bookcreate= async()=>{
        try{
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
            const bookdata= await axios.post("http://localhost:5000/bookpost",{Name,Author,Publication,Year,Availablity},config)
            console.log(bookdata.data);
            navigate("/booktable")
            

        }catch(error){
          
            console.log("could'nt signup", error);
        }
    }
  return (
    <div style={{display:'flex',width:'100%'}}>
        <div style={{width:'20%'}}>
           <Home/>
        </div>
        <div style={{width:'100%',paddingTop:'54px',float:'left'}}>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an Book</h2>
          <MDBInput wrapperClass='mb-4' label='Book Name' size='lg' id='form1' type='text' onChange={Bname}/>
          <MDBInput wrapperClass='mb-4' label='Author' size='lg' id='form2' type='text' onChange={Bauthor}/>
          <MDBInput wrapperClass='mb-4' label='Publication' size='lg' id='form3' type='text' onChange={Bpublication}/>
          <MDBInput wrapperClass='mb-4' label='Year' size='lg' id='form4' type='text' onChange={Byear}/>
          <MDBInput wrapperClass='mb-4' label='Availablity' size='lg' id='form4' type='text' onChange={Bavailablity}/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={bookcreate}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
        </div>
    </div>
  )
}

export default CreateBook