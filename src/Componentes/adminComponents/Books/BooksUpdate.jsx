import React, { useEffect, useState } from "react";
import Home from "../../clientComponent/Home";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import './BooksUpdate.css'; 

function BookUpdate() {
  const [bookData, setBookData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/readbook/${id}`)
      .then((res) => {
        setBookData(res.data);
      });
  }, [id]);

  const { Name, Author, Publication, Year, Availablity } = bookData;

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [year, setYear] = useState("");
  const [availability, setAvailability] = useState("");

  useEffect(() => {
    setName(Name || "");
    setAuthor(Author || "");
    setPublication(Publication || "");
    setYear(Year || "");
    setAvailability(Availablity || "");
  }, [bookData]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handlePublicationChange = (event) => {
    setPublication(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleUpdate = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json"
        },
      };
      await axios.put(`http://localhost:5000/updatebook/${id}`, {
        Name: name,
        Author: author,
        Publication: publication,
        Year: year,
        Availablity: availability 
      }, config);
      navigate("/booktable");
    } catch (error) {
      console.log("Couldn't update book", error);
    }
  };

  return (
    <div className="update-container">
      <div className="sidebar">
        <Home />
      </div>
      <div className="content">
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Update a Book</h2>
              <MDBInput wrapperClass='mb-4' label='Book Name' size='lg' id='form1' type='text' value={name} onChange={handleNameChange} />
              <MDBInput wrapperClass='mb-4' label='Author' size='lg' id='form2' type='text' value={author} onChange={handleAuthorChange} />
              <MDBInput wrapperClass='mb-4' label='Publication' size='lg' id='form3' type='text' value={publication} onChange={handlePublicationChange} />
              <MDBInput wrapperClass='mb-4' label='Year' size='lg' id='form4' type='text' value={year} onChange={handleYearChange} />
              <MDBInput wrapperClass='mb-4' label='Availability' size='lg' id='form5' type='text' value={availability} onChange={handleAvailabilityChange} />
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleUpdate}>Update</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}

export default BookUpdate;