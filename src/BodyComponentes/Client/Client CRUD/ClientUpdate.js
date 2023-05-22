import React, { useEffect, useState } from 'react'
import Home from '../../../Headers/Home'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function ClientUpdate() {
const [updatedata, setupdatedata] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/readclient/${id}`).then((res)=>{
          setupdatedata(res.data)   
         })
      },[])

      console.log(updatedata);

      const navigate = useNavigate()

  const {id} = useParams()
  console.log(id);
  
  const [Name, setName] = useState("")
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Signedstatus, setSignedstatus] = useState("")
  const [Role, setRole] = useState("SignedIn")
  const [Phonenumber, setPhonenumber] = useState("")

  useEffect(() => {
    const {Name,Username,Email,Signedstatus,Role,Phonenumber}=updatedata
   setName(Name)
   setUsername(Username)
   setEmail(Email) 
   setSignedstatus(Signedstatus)
   setRole(Role)
   setPhonenumber(Phonenumber)
  }, [updatedata])

  console.log(Name);
  console.log(Username);
  console.log(Email);
  console.log(Signedstatus);
  console.log(Role);
  console.log(Phonenumber);

  const uName =(val)=>{
    setName(val.target.value)
  }
 const uUsername =(val)=>{
  setUsername(val.target.value)
 }
 const uEmail =(val)=>{
  setEmail(val.target.value)
 }
 const uSignedstatus =(val)=>{
  setSignedstatus(val.target.value)
 }
const uRole =(val)=>{
  setRole(val.target.value)
}
const uPhonenumber =(val)=>{
  setPhonenumber(val.target.value)
}

const Clientclick =async()=>{
    try{
        const config = {
            headers: {
                "content-type": "application/json"
            },
        }
          await axios.put(`http://localhost:5000/updateclient/${id}`,{Name,Username,Email,Signedstatus,Role,Phonenumber},config)

          navigate("/clienttable") 
        
    }catch(error){
      
        console.log("could'nt signup", error);
    }
}
  return (
    <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'20%'}}><Home/></div>
        <div style={{width:'100%',paddingTop:'50px',float:'left'}} >
        <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Update Client
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center" >Name</Form.Label>
                        <Form.Control type="text" value={Name} placeholder="Enter Name"  onChange={uName} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={Username} placeholder="Enter Username" onChange={uUsername} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" value={Email} placeholder="Enter email"  onChange={uEmail} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                      <Form.Label>Signed Status</Form.Label>
                     <Form.Check
                       type="radio"
                      label="Signed In"
                       name="SignedIn"
                       value="SignedIn"
                       checked={Signedstatus==="SignedIn"}
                       onChange={uSignedstatus}
                       id="radio1"
                      /> 
                     <Form.Check
                      type="radio"
                      label="Not Signed In"
                      name="NotSignedIn"
                      value="NotSignedIn"
                      checked={Signedstatus==="NotSignedIn"}
                       onChange={uSignedstatus}
                      id="radio2"
                     /> 
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor='options'>Role</Form.Label>
                        <Form.Select type="select" value={Role} onChange={uRole} name="select" id="options">
                           <option value="Superadmin">Super admin</option>
                           <option value="Onlybydmin">Only by admin</option>
                        </Form.Select>
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="Phone Number">
                        <Form.Label className="text-center">Phone Number</Form.Label>
                        <Form.Control type="number" value={Phonenumber} placeholder="Enter Phone Number" onChange={uPhonenumber} />
                      </Form.Group>
                    
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={()=>Clientclick()}>
                          Register
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
    </div>
  )
}

export default ClientUpdate