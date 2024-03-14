import React, { useState } from 'react';
import Home from '../../clientComponent/Home';
import { Button, Container, Grid, Typography, TextField } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './createBook.css'; 

function CreateBook() {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [Author, setAuthor] = useState('');
  const [Publication, setPublication] = useState('');
  const [Year, setYear] = useState('');
  const [Availability, setAvailability] = useState('');
  const [Photo, setPhoto] = useState(null);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]); 
  };

  const bookcreate = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', Photo);
      formData.append('Name', Name);
      formData.append('Author', Author);
      formData.append('Publication', Publication);
      formData.append('Year', Year);
      formData.append('Availablity', Availability);

      console.log(formData);

      const bookdata = await axios.post('http://localhost:5000/bookpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(bookdata.data);
      navigate('/booktable');
    } catch (error) {
      console.log("couldn't signup", error);
    }
  };

  return (
    <div className="page-container">
      <div className="sidebar">
        <Home />
      </div>
      <div className="content">
        <Container maxWidth="sm" className="container">
          <Typography variant='h4' className="heading">CREATE A NEW BOOK</Typography>
          <Grid container spacing={3} className="form-grid">
            <Grid item xs={12} className="form-input">
              <TextField id="outlined-basic" label="Book Name" variant="outlined" fullWidth size="small" value={Name} onChange={(e) => handleInputChange(e, setName)} />
            </Grid>
            <Grid item xs={12} className="form-input">
              <TextField id="outlined-basic" label="Author" variant="outlined" fullWidth size="small" value={Author} onChange={(e) => handleInputChange(e, setAuthor)} />
            </Grid>
            <Grid item xs={12} className="form-input">
              <TextField id="outlined-basic" label="Publication" variant="outlined" fullWidth size="small" value={Publication} onChange={(e) =>  handleInputChange(e, setPublication)} />
            </Grid>
            <Grid item xs={12} className="form-input">
              <TextField id="outlined-basic" label="Year" variant="outlined" fullWidth size="small" value={Year} onChange={(e) =>  handleInputChange(e, setYear)} />
            </Grid>
            <Grid item xs={12} className="form-input">
              <TextField id="outlined-basic" label="Availability" variant="outlined" fullWidth size="small" value={Availability} onChange={(e) =>  handleInputChange(e, setAvailability)} />
            </Grid>
            <Grid item xs={12} className="file-input">
              <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </Grid>
            <Grid item xs={12} className="register-button">
              <Button fullWidth variant="contained" color="primary" onClick={bookcreate}>Register</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default CreateBook;