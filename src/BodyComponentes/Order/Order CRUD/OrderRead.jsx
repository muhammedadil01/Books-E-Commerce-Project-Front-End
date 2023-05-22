import React, { useEffect, useState } from 'react'
import Home from '../../../Headers/Home'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function OrderRead() {
 const [orderData, setorderData] = useState({})

  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5000/readorder/${id}`).then((res)=>{
      setorderData(res.data)
  })
  }, [])
  
  
  return (
    <div style={{display:'flex',width:'100%'}}>
      <div style={{width:'20%'}}><Home/></div>
      <div style={{marginLeft:'auto',marginRight:'auto',paddingTop:'95px'}}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" style={{height:'15rem'}} src="https://t4.ftcdn.net/jpg/05/21/94/81/360_F_521948178_WUlWgu8X5k2TyHH5bDJDY1tRfJEvz4CN.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <Row>
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">First Name :{orderData.Firstname}  </li>
                 <li class="list-group-item">Order Id :{orderData.Orderid} </li>
             </ul>
             </Col>
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Last Name :{orderData.Lastname}  </li>
                 <li class="list-group-item">Product Number:{orderData.Productnumber}</li>
             </ul>
             </Col>
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Date:{orderData.Date}  </li>
                 <li class="list-group-item">Street :{orderData.Street}</li>
             </ul>
             </Col>
             
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Pin Code:{orderData.Pincode}  </li>
                 <li class="list-group-item">Contact Number :{orderData.Contactnumber}</li>
             </ul>
             </Col>
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Additional Information:{orderData.Additionalinformation}  </li>
                 <li class="list-group-item">Place :{orderData.Place}</li>
             </ul>
             </Col>
             <Col>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Country: {orderData.Country} </li>
             </ul>
             </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default OrderRead