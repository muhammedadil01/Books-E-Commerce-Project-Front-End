import React, { useEffect, useState } from 'react'
import Home from '../../Headers/Home'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput  
  }
  from 'mdb-react-ui-kit';
  import {  Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
function Createcustomer() {
  const [country, setcountry] = useState([])
   const [Name, setName] = useState("") 
   const [Email, setEmail] = useState("")
   const [Address, setAddress] = useState("")
   const [Address1, setAddress1] = useState("")
   const [City, setCity] = useState("")
   const [State, setState] = useState("")
   const [Pincode, setPincode] = useState("")
   const [Country, setCountry] = useState("")

  useEffect(() => {
    const fetchCountry =async()=>{
   const respones = await axios.get('https://restcountries.com/v2/all')
   setcountry(respones.data)
    }
    fetchCountry();
  }, [])

  const changename =(val)=>{
    setName(val.target.value)
  }
  const changeemail=(val)=>{
    setEmail(val.target.value)
  }
  const changeaddress=(val)=>{
    setAddress(val.target.value)
  }
  const changeaddress1=(val)=>{
   setAddress1(val.target.value)
  }
  const changecity=(val)=>{
    setCity(val.target.value)
  }
  const changestate =(val)=>{
    setState(val.target.value)
  }
  const changepincode =(val)=>{
    setPincode(val.target.value)
  }
  const changecountry=(val)=>{
    setCountry(val.target.value)
  }

  const navigate = useNavigate()
 
  const CustomerSubmit =async()=>{
    try{
      const config = {
          headers: {
              "content-type": "application/json"
          },
      }
      const customerdata= await axios.post("http://localhost:5000/customercreate",{Name,Email,Address,Address1,City,State,Pincode,Country},config)
      console.log(customerdata.data);
  
      navigate("/customertable")
  
  }catch(error){
    
      console.log("could'nt signup", error);
  }
  }
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div>
        <MDBContainer fluid className='bg-light'>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol>

    <MDBCard className='my-4'>

      <MDBRow className='g-0'>

        <MDBCol md='6' className="d-none d-md-block">
          <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
        </MDBCol>

        <MDBCol md='6'>

          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <h3 className="mb-5 text-uppercase fw-bold">Customer registration form</h3>

            <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={changename}/>
            <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'onChange={changeemail}/>
            <MDBInput wrapperClass='mb-4' label='Address line 1' size='lg' id='form3' type='text' onChange={changeaddress}/>
            <MDBInput wrapperClass='mb-4' label='Address line 2' size='lg' id='form3' type='text' onChange={changeaddress1}/>
            <MDBRow>
            <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='City' size='lg' id='form1' type='text' onChange={changecity}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form2' type='text' onChange={changestate}/>
              </MDBCol>
            </MDBRow>
             
            <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' onChange={changepincode}/>
            <Form.Group>
              <Form.Label htmlFor='options'>Country</Form.Label>
                 <Form.Select type="select"  name="select" id="options" onChange={changecountry}>
                  {
                    country.map((cntry)=>(
                      <option key={cntry} >{cntry.name}</option> 
                    ))
                  }
                 </Form.Select>
             </Form.Group>
            

            <div className="d-flex justify-content-end pt-3">
              <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
              <MDBBtn className='ms-2' color='warning' size='lg' onClick={CustomerSubmit}>Submit form</MDBBtn>
            </div>

          </MDBCardBody>

        </MDBCol>
      </MDBRow>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
        </div>
    </div>
  )
}

export default Createcustomer