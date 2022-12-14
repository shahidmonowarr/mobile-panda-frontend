import { Button, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/shares/Footer/Footer";
import Header from "../../../components/shares/Header/Header";
import Loading from "../../../components/shares/Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p style={{ color: "red" }}>{error?.message || gError?.message}</p>
    );
  }

  if (token) {
    // console.log(user || gUser);
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <Header />
      <Container>
        <Grid
          sx={{ justifyContent: "center", marginTop: "50px" }}
          container
          spacing={2}
        >
          <Grid item lg={5} md={5} sm={11} xs={11}>
            <Box
              style={{
                border: "1px solid gray",
                padding: "40px",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ width: "200px", marginX: "auto", marginY: "10px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/G3tn5M1/Mobile-Panda-1-2.png"
                  alt=""
                />
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="email"
                  name="email"
                  variant="standard"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />{" "}
                <label className="label mb-2 text-danger">
                  {errors.email?.type === "required" && (
                    <span
                      style={{ color: "red" }}
                      className="label-text-alt text-red"
                    >
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span
                      style={{ color: "red" }}
                      className="label-text-alt text-red"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </label>
                <br />
                <TextField
                  sx={{ width: "100%" }}
                  label="Password"
                  type="password"
                  name="password"
                  variant="standard"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label mb-2 text-danger">
                  {errors.password?.type === "required" && (
                    <span style={{ color: "red" }} className="label-text-alt">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span style={{ color: "red" }} className="label-text-alt">
                      {errors.password.message}
                    </span>
                  )}
                </label>
                {signInError}
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
                    Login
                  </Button>
                </Box>
              </form>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Don't have an account ?{" "}
                <span>
                  <Link
                    style={{ color: "#5DADE2", textDecoration: "none" }}
                    to="/register"
                  >
                    Create One
                  </Link>
                </span>
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
                  onClick={() => signInWithGoogle()}
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
      <Footer />
    </>
  );
};

export default Login;
