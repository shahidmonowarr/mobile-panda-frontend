import { Button, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/shares/Loading/Loading";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken/useToken";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p style={{ color: "red" }}>{error?.message || gError?.message || updateError?.message}</p>
    );
  }

  if (token) {
    navigate('/home');
  }

  const onSubmit = async data => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('update done');
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                sx={{ width: "100%" }}
                label="Name"
                type="text"
                name="name"
                variant="standard"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
              />
              <label className="label mb-2">
                {errors.name?.type === "required" && (
                  <span style={{ color: "red" }} className="label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
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
              />
              <label className="label mb-2 text-danger">
                {errors.email?.type === "required" && (
                  <span style={{ color: "red" }} className="label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span style={{ color: "red" }} className="label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
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
  );
};

export default Register;
