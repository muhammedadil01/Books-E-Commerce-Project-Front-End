import React from 'react'
import Home from '../../clientComponent/Home'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRadio
  }
  from 'mdb-react-ui-kit';
  import { Form } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateTeamMember() {

    const navigate = useNavigate()

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dateofbirth, setDateofbirth] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")

    const tname=(val)=>{
      setName(val.target.value)
    }
    const temail=(val)=>{
     setEmail(val.target.value)
    }
    const tdateofbirth=(val)=>{
      setDateofbirth(val.target.value)
    }
    const tgender=(val)=>{
      setGender(val.target.value)
    }
    const tdescription=(val)=>{
      setDescription(val.target.value)
    }
    const trole=(val)=>{
      setRole(val.target.value)
    }
    const tphonenumber=(val)=>{
      setPhonenumber(val.target.value)
    }
    const TeamSubmit =async()=>{
        try{
          const config = {
              headers: {
                  "content-type": "application/json"
              },
          }
          const teammemberdata= await axios.post("http://localhost:5000/teammembercreate",{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber},config)
          console.log(teammemberdata.data);
      
          navigate("/teammembertable")
      
      }catch(error){
        
          console.log("could'nt signup", error);
      }
      }
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div style={{backgroundColor:'#F6F6F6',width:'100%'}}>
        <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={tname}/>
        </MDBCol>
        
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' onChange={temail}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='lg' id='form3' type='date' onChange={tdateofbirth}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form2' type='text' onChange={tdescription}/>
        </MDBCol>

      </MDBRow>
       
     
      <MDBRow>
      <Form.Group md='6' className='mb-4' >
         <Form.Label htmlFor='options'>Role</Form.Label>
             <Form.Select type="select" name="select" id="options" md='6' onChange={trole}>
                <option value="Superadmin">Super admin</option>
                <option value="Onlybydmin">Only by admin</option>
            </Form.Select>
        </Form.Group>
        
          <MDBCol md='6' className='mb-4'>
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='Female' label='Female' inline onChange={tgender}/>
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='Male' label='Male' inline onChange={tgender} />
          
        </MDBCol>

      </MDBRow>

      <MDBRow>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' onChange={tphonenumber}/>
        </MDBCol>
       
      </MDBRow>

      
      <MDBBtn className='mb-4' size='lg' onClick={TeamSubmit}>Submit</MDBBtn>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
        </div>
    </div>
  )
}

export default CreateTeamMember