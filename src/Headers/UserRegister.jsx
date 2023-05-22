import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import axios from "axios"

function UserRegister(){
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const ufstname=(val)=>{
        setFirstName(val.target.value)
    }
    const uscname=(val)=>{
        setSecondName(val.target.value)
    }
    const uemail=(val)=>{
        setEmail(val.target.value)
    }
    const upswrd=(val)=>{
        setPassword(val.target.value)
    }

    const usersubmit =async()=>{
        try{
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
            const userdata= await axios.post("http://localhost:5000/register",{FirstName,SecondName,Email,Password},config)
            console.log(userdata.data);
            localStorage.setItem("userdata", JSON.stringify(userdata.data))

        }catch(error){
          
            console.log("could'nt signup", error);
        }
    }
  return (
    <div>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp)',height:'800px'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' onChange={ufstname}/>
          <MDBInput wrapperClass='mb-4' label='Second Name' size='lg' id='form2' type='text' onChange={uscname}/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email' onChange={uemail}/>
          <MDBInput wrapperClass='mb-4' label='password' size='lg' id='form4' type='password' onChange={upswrd}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={usersubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    
    </div>
  )
}

export default UserRegister