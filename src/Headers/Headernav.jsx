import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import {
//   MDBNavbar,
//   MDBBtn,
//   MDBContainer,
//   MDBNavbarLink,
//   MDBBadge,
//   MDBIcon,
//   MDBInputGroup,
// } from 'mdb-react-ui-kit';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";
import { newcontext } from './ContextProvaider';
import image from '../Assets/images/online-bookstore.jpeg'

function Headernav() {
  const { setfetchItem, fetchItem } = useContext(newcontext);
  const [showImage, setshowImage] = useState(true);

  const location = useLocation();

  const clickImage = () => {
    setshowImage(!showImage);
  };

  const shouldShowImage = location.pathname === '/'; 

  return (
    <div>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            <span style={{ fontFamily: 'Brush Script MT', fontSize: '32px', fontWeight: 'bold', fontStyle: 'italic', color: 'black' }}>Oops Books</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/adminregister" onClick={clickImage}>Admin Register</Nav.Link>
              <Nav.Link href="/adminlogin" onClick={clickImage}>Admin Login</Nav.Link>
              <Nav.Link href="/userregister" onClick={clickImage}>User Register</Nav.Link>
              <Nav.Link href="/userlogin" onClick={clickImage}>User Login</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Link to='/bookcart'>
              <Nav.Link href="#cart" onClick={clickImage}>
              <BsCart3 className="cart-icon" /> <span className="badge" style={{backgroundColor:'black'}}>{fetchItem.length}</span>
              </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {shouldShowImage && showImage && (
        <img style={{height:"800px",width:"100%"}} src={image} alt='' />
      )}
    </div>
  );
}

export default Headernav;

{/* <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer tag='form' fluid className='justify-content-end'>
          <MDBNavbarLink href='/Adminregister' style={{marginLeft:"10px"}}  onClick={clickImage}>
            Admin Register
          </MDBNavbarLink>
          <MDBNavbarLink href='/Adminlogin' style={{marginLeft:"20px"}}  className='me-auto' onClick={clickImage}>
            Admin Login
          </MDBNavbarLink>
          <MDBInputGroup tag='form' className='d-flex w-auto me-2'>
            <input className='form-control' placeholder='Search...' aria-label='Search' type='Search' />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
          <MDBNavbarLink className='me-2'>
            <Link to='/bookcart'>
              <MDBBadge pill color='danger'>
                {fetchItem.length}
              </MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </Link>
          </MDBNavbarLink>
          <MDBBtn onClick={clickImage} outline color='success' className='me-2 btn bg-success' type='button'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/userregister'>
              Register
            </Link>
          </MDBBtn>
          <MDBBtn onClick={clickImage} className='btn bg-primary me-2' size='sm' type='button'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/userlogin'>
              Login
            </Link>
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar> */}
