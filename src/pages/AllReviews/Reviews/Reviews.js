import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Loading from '../../../components/shares/Loading/Loading';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mobile-panda.onrender.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);
    return (
        <Box sx={{marginTop: 7}}>
      <Typography
          sx={{ fontWeight: "bold", m: 2 }}
          variant="h4"
          component="div"
        >
          The<span style={{ color: "#08C137" }}> Testimonials</span>
        </Typography>
        <Typography
          sx={{ fontWeight: 400, mb: 5 }}
          variant="h6"
          component="div"
        >
          What Our customers say about us
        </Typography>
      <Container>
        <Grid sx={{ mb: 12 }} container spacing={4}>
        {
                 reviews.length <= 0   &&
                 <Loading/>

            }
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
      </Container>
    </Box>
    );
};

export default Reviews;