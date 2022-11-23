import {
    Alert,
    Button,
    Container,
    Rating,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import './AddReview.css';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const initialInfo = { displayName: user.displayName, email: user.email };
    const [reviewSuccessful, setReviewSuccessful] = useState(false);
    const [reviewData, setReviewData] = useState(initialInfo);

    const handleBlur = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newDetails = { ...reviewData };
        newDetails[field] = value;
        setReviewData(newDetails);
      };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const review = {
            ...reviewData,
          };
          console.log(review);
        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setReviewSuccessful(true);
                    console.log(data);
                }
            });
    };

    return (
        <Container>
      <Typography
        sx={{
          color: "black",
          fontWeight: "semiBold",
          textTransform: "capitalize",
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "50px",
        }}
        variant="h4"
        noWrap
        component="div"
      >
        Make Review
      </Typography>

      <form
        className="reviewFrom"
        sx={
          {
            // border: "none",
            // padding: "40px",
            // borderRadius: "15px",
            // backgroundColor: "#F7DC6F",
          }
        }
        onSubmit={handleReviewSubmit}
      >
        <TextField
          placeholder="Your Image URL"
          sx={{
            width: "100%",
            marginY: 1,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          name="img"
          onBlur={handleBlur}
          variant="outlined"
        />{" "}
        <Stack spacing={1} sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "semiBold",
                  textTransform: "capitalize",
                }}
                variant="h6"
                noWrap
                component="div"
              >
                Your Rating:
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 2 }}>
              <Rating
                name="rating"
                onBlur={handleBlur}
                defaultValue={0}
                size="large"
              />
            </Box>
          </Box>
        </Stack>
        <br />
        <TextField
          id="outlined-multiline-static"
          placeholder="Write Your Review"
          multiline
          rows={4}
          sx={{
            width: "100%",
            marginY: 1,
            backgroundColor: "white",
            borderRadius: 1,
          }}
          name="comment"
          onBlur={handleBlur}
        />{" "}
        <Box sx={{ width: "50%", margin: "auto" }}>
          <Button
            sx={{
              backgroundColor: "black",
              mt: 2,
              px: 4,
              textTransform: "capitalize",
              ":hover": { backgroundColor: "black" },
              width: "100%",
            }}
            type="submit"
            variant="contained"
          >
            Add Review
          </Button>
        </Box>
      </form>

      {reviewSuccessful && (
        <Alert sx={{ marginTop: "20px" }} severity="success">
          Review Added Successfully!
        </Alert>
      )}
      <div className="content">
        <Outlet />
      </div>
    </Container>
    );
};

export default AddReview;