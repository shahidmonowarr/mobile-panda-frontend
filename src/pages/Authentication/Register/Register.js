import { Button, Grid, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if(user){
    console.log(user);
  }
    return (
        <Container>
      <Box sx={{ width: "200px", marginX: "auto", marginY: "50px" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/vqZxqCQ/Mobile-Panda-1-2.png"
          alt=""
        />
      </Box>
      <Grid sx={{ justifyContent: "center" }} container spacing={2}>
        <Grid item lg={5} md={5} sm={11} xs={11}>
          <Box
            style={{
              border: "1px solid gray",
              padding: "40px",
              borderRadius: "15px",
            }}
          >
            
              <form >
                <TextField
                  sx={{ width: "100%" }}
                  label="Name"
                  type="text"
                  name="name"
                  
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="email"
                  name="email"
                  
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Password"
                  type="password"
                  name="password"
                  
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Retype Your Password"
                  type="password"
                  name="password2"
                  
                  variant="standard"
                />
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      marginY: 3,
                      borderRadius: "30px",
                      backgroundColor: "black",
                      ":hover": { backgroundColor: "black" },
                      textTransform: "capitalize",
                      fontSize: "17px",
                    }}
                    variant="contained"
                  >
                    Register
                  </Button>
                </Box>
              </form>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
              Already have an account ? Please{" "}
              <Link
                style={{ color: "#5DADE2", textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
            </p>
            <p
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              ----------- or -----------
            </p>
            <Box style={{ width: "100%", margin: "auto", marginY: "10px" }}>
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  borderRadius: "30px",
                  color: "black",
                  fontSize: "17px",
                }}
                variant="outlined"
                onClick={ () => signInWithGoogle()}
              >
                <img
                  style={{ width: "30px" }}
                  src="https://i.ibb.co/bKqnDkL/google-1.png"
                  alt=""
                />
                <span style={{ visibility: "hidden" }}>__</span>Continue with
                Google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;