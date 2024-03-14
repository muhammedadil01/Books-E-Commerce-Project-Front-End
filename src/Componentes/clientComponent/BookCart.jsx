import React, { useContext, useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { newcontext } from '../../Context/ContextProvaider';

function BookCart() {
  const { fetchItem } = useContext(newcontext);
  const [cartItems, setCartItems] = useState([]);
  const [itemCounts, setItemCounts] = useState([]);

  useEffect(() => {
    setCartItems(fetchItem);
    setItemCounts(fetchItem.map((item) => 0));
  }, []);

  const increaseCount = (index) => {
    setItemCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decreaseCount = (index) => {
    setItemCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index && count > 0 ? count - 1 : count))
    );
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (
    <div>
      <section className="h-100" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="13">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {cartItems.map((item, index) => (
                <MDBCard className="rounded-3 mb-4" key={index}>
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <p className="lead fw-normal mb-2">Name: {item.Name}</p>
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">Author: {item.Author}</p>
                        <p>
                          <span className="text-muted">Publication: {item.Publication} </span>
                          <span className="text-muted">Availablity: {item.Availablity} </span>
                        </p>
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
                        <MDBBtn color="link" className="px-2" onClick={() => decreaseCount(index)}>
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>

                        <MDBInput type="number" size="sm" value={itemCounts[index]} />

                        <MDBBtn color="link" className="px-2" onClick={() => increaseCount(index)}>
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                       Year : {item.Year}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="">
                        <MDBBtn style={{ backgroundColor: 'white' }} onClick={() => removeItem(index)}>
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default BookCart;
{/* <MDBCard>
<MDBCardBody>
  <MDBBtn className="ms-3" color="warning" block size="lg">
    Apply
  </MDBBtn>
</MDBCardBody>
</MDBCard> */}