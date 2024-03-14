import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Headernav.css"
import image from '../../Assets/images/download.png'
import { newcontext } from '../../Context/ContextProvaider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function Headernav() {
  const { setfetchItem, fetchItem } = useContext(newcontext);
  const [showImage, setshowImage] = useState(true);

  const location = useLocation();

  return (
    <div>
      <div className='login-section'>
        <div className='Email-section'>
          <a className='link-title' href="">Email: bookscape@gmail.com</a>
        </div>
        <div className='login-container'>
         <div className='admin-register'><Link to='/Adminregister' className='link-title'><a >Admin Register</a></Link></div>
         <div className='admin-login'><Link to='/Adminlogin' className='link-title'><a >Admin Login</a></Link></div>
         <div className='user-register'><Link to='/userregister' className='link-title'><a >Register</a></Link></div>
         <div className='user-login'><Link to='/userlogin' className='link-title'><a >Login</a></Link></div>
        </div>
      </div>
      <div className='header-section'>
        <div className='logo-section'>
          <img src={image} alt="" className='title-img' />
        </div>
        <div className='search-section'>
          <div className='search-box'><input type="text" className='search-input' /><button className='search-btn'><SearchIcon/></button></div>
           
        </div>
        <div className='cart-section'>
         <Link to='/bookcart'><h5 className='cart-container'>
              Cart
              <Badge badgeContent={4} color="secondary">
                <AddShoppingCartIcon/>
              </Badge>
            </h5></Link> 
        </div>
      </div>
    </div>
  );
}

export default Headernav;


