import React, { useState } from 'react'
import Home from '../../Headers/Home'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateClient() {

  const navigate = useNavigate()
  const [Name, setName] = useState("")
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Signedstatus, setSignedstatus] = useState("")
  const [Role, setRole] = useState("SignedIn")
  const [Phonenumber, setPhonenumber] = useState("")

  const cName =(val)=>{
    setName(val.target.value)
  }
 const cUsername =(val)=>{
  setUsername(val.target.value)
 }
 const cEmail =(val)=>{
  setEmail(val.target.value)
 }
 const cSignedstatus =(val)=>{
  setSignedstatus(val.target.value)
 }
const cRole =(val)=>{
  setRole(val.target.value)
}
const cPhonenumber =(val)=>{
  setPhonenumber(val.target.value)
}
console.log(Signedstatus);
const ClientSubmit =async()=>{
  try{
    const config = {
        headers: {
            "content-type": "application/json"
        },
    }
    const clientdata= await axios.post("http://localhost:5000/clientpost",{Name,Username,Email,Signedstatus,Role,Phonenumber},config)
    console.log(clientdata.data);

    navigate("/clienttable")

}catch(error){
  
    console.log("could'nt signup", error);
}
}
  return (
    <div  style={{width:'100%',display:'flex'}}>
        <div><Home/></div>
        <div style={{width:'100%',float:'left' ,backgroundColor:'#F6F6F6'}}>
        <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Create Client
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center" >Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  onChange={cName} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={cUsername} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={cEmail} />
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
                       onChange={cSignedstatus}
                       id="radio1"
                      /> 
                     <Form.Check
                      type="radio"
                      label="Not Signed In"
                      name="NotSignedIn"
                      value="NotSignedIn"
                      checked={Signedstatus==="NotSignedIn"}
                       onChange={cSignedstatus}
                      id="radio2"
                     /> 
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor='options'>Role</Form.Label>
                        <Form.Select type="select" value={Role} onChange={cRole} name="select" id="options">
                           <option value="Superadmin">Super admin</option>
                           <option value="Onlybydmin">Only by admin</option>
                        </Form.Select>
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="Phone Number">
                        <Form.Label className="text-center">Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" onChange={cPhonenumber} />
                      </Form.Group>
                    
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={ClientSubmit}>
                          Create Account
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

export default CreateClient