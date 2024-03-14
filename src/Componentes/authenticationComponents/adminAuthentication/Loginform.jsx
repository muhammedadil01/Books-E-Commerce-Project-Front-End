import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

const defaultTheme = createTheme();

export default function Loginform() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigatE = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
      event.preventDefault(); 
      try {
          const config = {
              headers: {
                  "content-type": "application/json"
              },
          }
          const logindata = await axios.post("http://localhost:5000/Adminlogin", { email, password }, config);
          console.log(logindata.data);
  
          if (logindata.data === "Login Successfull") {
              console.log("Login successful. Navigating to /home");
              localStorage.setItem('AdminData', JSON.stringify({ email }));
              navigatE('/home'); 
          } else {
              console.log("Login unsuccessful. Navigating to /Adminlogin");
              navigatE('/Adminlogin');
          }
  
      } catch (error) {
          console.log("Error during login:", error.response.data);
          
      }
  }

    return (
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Sign in
              </Typography>
              <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={handleEmailChange}
                  />
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={handlePasswordChange}
                  />
                  <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                  />
                  <Button
                      type="submit" 
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                  >
                      Sign In
                  </Button>
                  <Grid container>
                      <Grid item xs>
                          <Link href="#" variant="body2">
                              Forgot password?
                          </Link>
                      </Grid>
                      <Grid item>
                          <Link href="/Adminregister" variant="body2">
                              {"Don't have an account? Sign Up"}
                          </Link>
                      </Grid>
                  </Grid>
              </Box>
          </Box>
      </Container>
  </ThemeProvider>
    );
}


