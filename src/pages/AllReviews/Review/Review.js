import { Card, Grid, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react';

const Review = ({review}) => {
    const { displayName,  img, comment, rating} = review;
    return (
        <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ px: 5, height: "240px", borderRadius: 5}} elevation={12}>
        <Box sx={{ display: "flex", alignItems: "center", pt: 1}}>
          <Box sx={{ width: "30%" }}>
            <img
              style={{ width: "100%", borderRadius: 16, marginTop: "20px" }}
              src={img}
              alt=""
            />
          </Box>
          <Box sx={{ marginLeft: 3 }}>
            <Typography
              sx={{ fontWeight: "700", fontSize: "17px" }}
              variant="subtitle1"
              gutterBottom
            >
              {displayName}
            </Typography>
            <Stack spacing={1}>
              <Rating name="size-small" defaultValue={rating} size="small" readOnly  />
            </Stack>
          </Box>
        </Box>
        <Box sx={{mt: 2.5}}>
          <Typography variant="body1" gutterBottom>
            {comment}
          </Typography>
        </Box>
      </Card>
    </Grid>
    );
};

export default Review;