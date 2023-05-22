import React, { useEffect } from 'react'
import Home from '../../../Headers/Home'
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
import { useNavigate, useParams } from 'react-router-dom';

function TeamMemberUpdate() {

    const [updatedata, setupdatedata] = useState({})
     
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/readteammember/${id}`).then((res)=>{
            setupdatedata(res.data)
        })
    }, [])

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Dateofbirth, setDateofbirth] = useState("")
    const [Gender, setGender] = useState("")
    const [Description, setDescription] = useState("")
    const [Role, setRole] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")

    useEffect(() => {
        const {Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber}=updatedata
       setName(Name)
       setEmail(Email) 
       setDateofbirth(Dateofbirth)
       setGender(Gender)
       setDescription(Description)
       setRole(Role)
       setPhonenumber(Phonenumber)
      }, [updatedata])

    const uname=(val)=>{
      setName(val.target.value)
    }
    const uemail=(val)=>{
     setEmail(val.target.value)
    }
    const udateofbirth=(val)=>{
      setDateofbirth(val.target.value)
    }
    const ugender=(val)=>{
      setGender(val.target.value)
    }
    const udescription=(val)=>{
      setDescription(val.target.value)
    }
    const urole=(val)=>{
      setRole(val.target.value)
    }
    const uphonenumber=(val)=>{
      setPhonenumber(val.target.value)
    }
    const teamclick =async()=>{
        try{
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
              await axios.put(`http://localhost:5000/updateteammember/${id}`,{Name,Email,Dateofbirth,Gender,Description,Role,Phonenumber},config)
    
              navigate("/teammembertable")
            
        }catch(error){
          
            console.log("could'nt signup", error);
        }
    }
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'20%'}}><Home/></div>
        <div style={{paddingTop:'50px'}}>
        <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Updation Form</h3>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={uname} value={Name} />
        </MDBCol>
        
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' onChange={uemail} value={Email}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Date Of Birth' size='lg' id='form3' type='date' onChange={udateofbirth} value={Dateofbirth}/>
        </MDBCol>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form2' type='text' onChange={udescription} value={Description}/>
        </MDBCol>

      </MDBRow>
       
     
      <MDBRow>
      <Form.Group md='6' className='mb-4' >
         <Form.Label htmlFor='options'>Role</Form.Label>
             <Form.Select type="select" name="select" id="options" md='6' onChange={urole} value={Role}>
                <option value="Superadmin">Super admin</option>
                <option value="Onlybydmin">Only by admin</option>
            </Form.Select>
        </Form.Group>
        
          <MDBCol md='6' className='mb-4'>
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='Female' label='Female' inline onChange={ugender} />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='Male' label='Male' inline onChange={ugender} />
          
        </MDBCol>

      </MDBRow>

      <MDBRow>
        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' onChange={uphonenumber} value={Phonenumber}/>
        </MDBCol>
       
      </MDBRow>

      
      <MDBBtn className='mb-4' size='lg' onClick={()=>teamclick()}>Submit</MDBBtn>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
        </div>
    </div>
  )
}

export default TeamMemberUpdate