import React, { useEffect, useState } from "react"
import Home from "../../Headers/Home"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";


function Update() {
  const [data, setdata] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:5000/readbook/${id}`).then((res)=>{
      setdata(res.data)
      
     })
  }, [])


  console.log(data);

  

  
  const navigate = useNavigate()

  const {id} = useParams()
  console.log(id);

  const [Name, setName] = useState("")
  const [Author, setAuthor] = useState("")
  const [Publication,setPublication] = useState("")
  const [Year, setYear] = useState("")
  const [Availablity, setAvailablity] = useState("")
  
 useEffect(() => {
   const {Name,Author,Publication,Year,Availablity}=data

   setName(Name);
   setAuthor(Author);
   setPublication(Publication)
   setYear(Year);
   setAvailablity(Availablity)
 }, [data])
 
 console.log(Name);
  const Fname =(val)=>{
    setName(val.target.value)
  }
  const Fauthor =(val)=>{
    setAuthor(val.target.value)
  }
  const Fpublication =(val)=>{
    setPublication(val.target.value)
  }
  const Fyear =(val)=>{
    setYear(val.target.value)
  }
  const Favailablity =(val)=>{
    setAvailablity(val.target.value)
  }
  
 

  
  const clickUpdate =async()=>{
    try{
      const config = {
          headers: {
              "content-type": "application/json"
          },
      }
        await axios.put(`http://localhost:5000/updatebook/${id}`,{Name,Author,Publication,Year,Availablity},config)
       
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
    <div style={{width:'100%',float:'left'}}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}}>
  <div className='mask gradient-custom-3'></div>
  <MDBCard className='m-5' style={{maxWidth: '600px'}}>
    <MDBCardBody className='px-5'>
      <h2 className="text-uppercase text-center mb-5">Update an Book</h2>
      <MDBInput wrapperClass='mb-4' label='Book Name' size='lg' id='form1' type='text' value={Name}  onChange={Fname}/>
      <MDBInput wrapperClass='mb-4' label='Author' size='lg' id='form2' type='text' value={Author}   onChange={Fauthor}/>
      <MDBInput wrapperClass='mb-4' label='Publication' size='lg' id='form3' type='text' value={Publication} onChange={Fpublication}/>
      <MDBInput wrapperClass='mb-4' label='Year' size='lg' id='form4' type='text' value={Year} onChange={Fyear}/>
      <MDBInput wrapperClass='mb-4' label='Availablity' size='lg' id='form4' value={Availablity} type='text' onChange={Favailablity}/>
      <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>clickUpdate()} >Register</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
    </div>
</div>
  )
}

export default Update