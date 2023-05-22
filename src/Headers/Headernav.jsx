import React, { useContext, useState } from 'react'
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer,
  MDBNavbarLink,
  MDBBadge,
  MDBIcon,
  MDBInputGroup,
 
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"
import { newcontext } from './ContextProvaider';
function Headernav() {
  const {setfetchItem,fetchItem} = useContext(newcontext)
  const [showImage, setshowImage] = useState(false)
  
  
  const clickImage=()=>{
    setshowImage(!showImage)
  }
  
  return (
    <div>
     <MDBNavbar fixed='top' light bgColor='light'>
      <MDBContainer tag="form" fluid className='justify-content-end'>
       
        <MDBNavbarLink href='/Adminregister' className='me-auto ' onClick={clickImage}>Admin Register</MDBNavbarLink>
        <MDBNavbarLink href='/Adminlogin' className='me-auto' onClick={clickImage} >Admin Login</MDBNavbarLink>
        
        
       
        <MDBInputGroup tag="form" className='d-flex w-auto me-2'>
          <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
        <MDBNavbarLink  className='me-2'>
          <Link to="/bookcart">
              <MDBBadge pill color='danger'>{fetchItem.length}</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
              </Link>  
            </MDBNavbarLink>
            <MDBBtn  outline color="success" className='me-2 btn bg-success' type='button'>
        <Link style={{textDecoration:'none',color:'white'}} to="/userregister">
              Register
        </Link>
        </MDBBtn>
        <MDBBtn className='btn bg-primary me-2'  size="sm" type='button'>
        <Link style={{textDecoration:'none', color:'white'}} to="/userlogin">
              Login
             </Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
    {
      showImage && (
        
        <img src="http://shopify.pixelstrap.com/bookshop/assets/images/landing-page/head.png" alt="" />
       
      )
    }
     
    </div>
    
  )
}

export default Headernav

