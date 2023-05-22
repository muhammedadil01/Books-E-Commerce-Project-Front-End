import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
  } from "mdb-react-ui-kit";
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom'

function UserLogin() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const navigate = useNavigate();

    const logemail =(val)=>{
        setEmail(val.target.value)
    }

    const logpsrwd1 =(val)=>{
        setPassword(val.target.value)
    }
      
    const userLogin =async()=>{
        try{
            const config = {
                headers: {
                    "content-type": "application/json"
                },
            }
            const logindata= await axios.post("http://localhost:5000/login",{Email,Password},config)
            console.log(logindata.data);

            const localData = JSON.parse(localStorage.getItem('userdata'))
            console.log(localData.Email);

            if(localData.Email === Email){
             navigate('/userhome')
            }else{
              navigate('/userlogin')
            }
            
        }catch(error){
          
            console.log("could'nt signup", error);
        }

        
    }
  return (
    <div>
        <MDBContainer fluid style={{ backgroundColor: "#eee" }}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ paddingTop: "50px" }}>
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                 onChange={logemail}
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  onChange={logpsrwd1}
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn size="lg" onClick={userLogin} >
                  Login
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default UserLogin