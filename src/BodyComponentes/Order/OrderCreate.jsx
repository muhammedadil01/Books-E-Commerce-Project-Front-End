import React, { useEffect, useState } from 'react'
import Home from '../../Headers/Home'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function OrderCreate() {
  const [country, setcountry] = useState([])
  const [count, setcount] = useState("")
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Orderid, setOrderid] = useState("")
  const [Productnumber, setProductnumber] = useState("")
  const [Date, setDate] = useState("")
  const [Street, setStreet] = useState("")
  const [Additionalinformation, setAdditionalinformation] = useState("")
  const [Place, setPlace] = useState("")
  const [Pincode, setPincode] = useState("")
  const [Contactnumber, setContactnumber] = useState("")
  const [Country, setCountry] = useState("")


  useEffect(() => {
    const fetchCountry =async()=>{
   const respones = await axios.get('https://restcountries.com/v2/all')
   setcountry(respones.data)
    }
    fetchCountry();
  }, [])

  const handlecounter =()=>{
    setcount(count +1)
  }

  const firstname =(val)=>{
    setFirstname(val.target.value)
  }
  const lastname =(val)=>{
    setLastname(val.target.value)
  }
  const orderid =(val)=>{
    setOrderid(val.target.value)
  }
  const productnum =(val)=>{
    setProductnumber(val.target.value)
  }
  const date =(val)=>{
    setDate(val.target.value)
  }
  const street =(val)=>{
    setStreet(val.target.value)
  }
  const additionalinfor =(val)=>{
    setAdditionalinformation(val.target.value)
  }
  const place =(val)=>{
    setPlace(val.target.value)
  }
  const contact =(val)=>{
    setContactnumber(val.target.value)
  }
  const scountry =(val)=>{
    setCountry(val.target.value)
  }
  const pincode =(val)=>{
    setPincode(val.target.value)
  }
   
  const navigate = useNavigate()
 
  const orderSubmit =async()=>{
    try{
      const config = {
          headers: {
              "content-type": "application/json"
          },
      }
      const orderdata= await axios.post("http://localhost:5000/ordercreate",{Firstname,Lastname,Orderid,Productnumber,Date,Street,Additionalinformation,Place,Pincode,Contactnumber,Country},config)
      console.log(orderdata.data);
  
      navigate("/ordertable")
  
  }catch(error){
    
      console.log("could'nt signup", error);
  }
  }
  
  return (
    <div style={{width:'100%',display:'flex',backgroundColor:'#F6F6F6'}}>
        <div><Home/></div>
        <div style={{marginLeft:'auto',marginRight:'auto',paddingTop:'30px'}}>
        <MDBContainer fluid className='h-custom ' >

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12' className='m-5'>

    <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>

      <MDBCardBody className='p-0'>

        <MDBRow>

          <MDBCol md='6' className='p-5 bg-white'>

            <h3 className="fw-normal mb-5" style={{color: 'black'}}>General Infomation</h3>
            

            <MDBRow>

              <MDBCol>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'onChange={firstname}/>
              </MDBCol>
            </MDBRow>
            <MDBCol>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' onChange={lastname}/>
              </MDBCol>
            
            <MDBInput wrapperClass='mb-4' label='Order Id' size='lg' id='form3' type='text' onChange={orderid}/>
             
             
             <div>
              <MDBInput 
              label="product Number"
              type='number'
              onChange={productnum}
              className='w-15 mr-2'
              onClick={handlecounter}
              />
              <MDBIcon
              className='m-2'
              />
              <MDBIcon
              className='m-2'
              />
             </div>
                     
               
        
            <MDBCol>
              <MDBInput wrapperClass='mb-4' label='Date' size='lg' id='form4' type='date' onChange={date}/>
              </MDBCol>
            </MDBCol>
            


          <MDBCol md='6' className=' p-5'>

            <h3 className="fw-normal mb-5 " style={{color: 'black'}}>Contact Details</h3>

            <MDBInput wrapperClass='mb-4'  label='Street + Nr' size='lg' id='form5' type='text' onChange={street}/>
            <MDBInput wrapperClass='mb-4'  label='Additional Information' size='lg' id='form6' type='text' onChange={additionalinfor}/>

           

              <MDBCol md='7'>
                <MDBInput wrapperClass='mb-4'  label='Place' size='lg' id='form7' type='text' onChange={place}/>
              </MDBCol>

            
            <MDBRow>
            <MDBCol md='5'>
               <MDBInput wrapperClass='mb-4'  label=' Pin Code' size='lg' id='form9' type='number' onChange={pincode}/>
             </MDBCol>
              <MDBCol md='7'>
                <MDBInput wrapperClass='mb-4'  label='Contact Number' size='lg' id='form10' type='text' onChange={contact}/>
              </MDBCol>
            </MDBRow>

            <Form.Group >
              <Form.Label md='7' htmlFor='options'>Country</Form.Label>
                 <Form.Select type="select"  name="select" id="options" onChange={scountry}>
                  {
                    country.map((cntry)=>(
                      <option key={cntry} >{cntry.name}</option> 
                    ))
                  }
                 </Form.Select>
             </Form.Group>
             <div style={{paddingTop:'20px'}}>
             <MDBCol >
             <MDBBtn  size='sm' onClick={()=>orderSubmit()}>Create Order</MDBBtn>
            </MDBCol>
             </div>
             
          </MDBCol>
        </MDBRow>

      </MDBCardBody>

    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
        </div>
    </div>
  )
}

export default OrderCreate