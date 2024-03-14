import React from 'react'
import Home from '../../clientComponent/Home'
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
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CustomerUpdate() {
    const [updatedata, setupdatedata] = useState({})
    const [countries, setcountries] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/readcustomer/${id}`).then((res)=>{
            setupdatedata(res.data)
        })
    }, [])

    useEffect(() => {
        const fetchCountry =async()=>{
       const respones = await axios.get('https://restcountries.com/v2/all')
       setcountries(respones.data)
        }
        fetchCountry();
      }, [])
      
    const [Name, setName] = useState("") 
    const [Email, setEmail] = useState("")
    const [Address, setAddress] = useState("")
    const [Address1, setAddress1] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [Pincode, setPincode] = useState("")
    const [Country, setCountry] = useState("")

    useEffect(() => {
        const {Name,Email,Address,Address1,City,State,Pincode,Country}=updatedata
       setName(Name)
       setEmail(Email) 
       setAddress(Address)
       setAddress1(Address1)
       setCity(City)
       setState(State)
       setPincode(Pincode)
       setCountry(Country)
      }, [updatedata])
    
    const upname=(val)=>{
       setName(val.target.value) 
    }
    const upemail=(val)=>{
      setEmail(val.target.value)  
    }
    const upaddress=(val)=>{
        setAddress(val.target.value)
    }
    const upaddress1=(val)=>{
      setAddress1(val.target.value)  
    }
    const upcity=(val)=>{
        setCity(val.target.value)
    }
    const upstate=(val)=>{
        setState(val.target.value)
    }
    const uppincode=(val)=>{
        setPincode(val.target.value)
    }
    const upCountry=(val)=>{
        setCountry(val.target.value)
    }
    console.log(Name);
    console.log(Email);
    console.log(Address);
    console.log(Address1);
    console.log(City);
    console.log(State);
    console.log(Pincode);
    console.log(Country);
    const Customerclick =async()=>{
        try{
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
              await axios.put(`http://localhost:5000/updatecustomer/${id}`,{Name,Email,Address,Address1,City,State,Pincode,Country},config)
    
              navigate("/customertable")
            
        }catch(error){
          
            console.log("could'nt signup", error);
        }
    }
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'20%'}}><Home/></div>
        <div style={{paddingTop:'50px'}}>
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
            <h3 className="mb-5 text-uppercase fw-bold">Customer Updation form</h3>

            <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' value={Name} onChange={upname}/>
            <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'value={Email} onChange={upemail}/>
            <MDBInput wrapperClass='mb-4' label='Address line 1' size='lg' id='form3' type='text'value={Address} onChange={upaddress}/>
            <MDBInput wrapperClass='mb-4' label='Address line 2' size='lg' id='form3' type='text' value={Address1} onChange={upaddress1}/>
            <MDBRow>
            <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='City' size='lg' id='form1' type='text' value={City} onChange={upcity}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form2' type='text' value={State} onChange={upstate}/>
              </MDBCol>
            </MDBRow>
             
            <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text' value={Pincode} onChange={uppincode}/>
            <Form.Group>
              <Form.Label htmlFor='options'>Country</Form.Label>
                 <Form.Select type="select"  name="select" id="options" value={Country} onChange={upCountry}>
                  {
                    countries.map((cntry)=>(
                      <option key={cntry} >{cntry.name}</option> 
                    ))
                  }
                 </Form.Select>
             </Form.Group>
            

            <div className="d-flex justify-content-end pt-3">
              <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
              <MDBBtn className='ms-2' color='warning' size='lg' onClick={()=>Customerclick()} >Submit form</MDBBtn>
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

export default CustomerUpdate