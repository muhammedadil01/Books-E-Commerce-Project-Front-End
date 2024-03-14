import React, { useContext, useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardFooter,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import { newcontext } from '../../Context/ContextProvaider';


function UserHome() {
    const [booksData, setBooksData] = useState([])
   
    const {setfetchItem,fetchItem} = useContext(newcontext)

    localStorage.setItem("Cartdata", JSON.stringify(fetchItem))
    
    console.log(setfetchItem);
    

    useEffect(() => {
        axios.get("http://localhost:5000/bookdata").then(Response=>{
            setBooksData(Response.data)
           })
    }, [])
  
  // const filteredArray = booksData.filter(book => book.Year == 2011)
  return (
    <div style={{display:"flex",overflowX:"auto",flexWrap:"nowrap",paddingTop:"59px"}}>
        {
            booksData.map((item)=>(
                  <MDBCard style={{marginRight:"15px",width:"16rem"}}>  
                    <MDBCardBody>
                      <MDBCardTitle>Name:{item.Name}</MDBCardTitle>
                      <MDBListGroup flush>
                  <MDBListGroupItem>Author:{item.Author}</MDBListGroupItem>
                  <MDBListGroupItem>Year:{item.Year}</MDBListGroupItem>
                  <MDBListGroupItem>Publication:{item.Publication}</MDBListGroupItem>
                  <MDBListGroupItem>Availablity:{item.Availablity}</MDBListGroupItem>
                </MDBListGroup>
                    </MDBCardBody>
                    <MDBCardFooter>
                    <MDBBtn onClick={()=>setfetchItem(oldvalue=>[...oldvalue,item])}  >Add to  Cart</MDBBtn>
                    </MDBCardFooter>
                  </MDBCard>  
            ))
             
        }
        
    </div>
  )
}

export default UserHome