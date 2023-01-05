import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Rating,
  Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ singleService }) => {
  const { name, reviews, rating, image, price, _id } = singleService;

  return (
    <Grid sx={{ marginY: "10px" }} item xs={12} md={4}>
      <Paper elevation={16} sx={{ borderRadius: "30px" }}>
        <Card sx={{ borderRadius: "30px" }}>
          <CardMedia
            component="img"
            sx={{ width: "60%", margin: "auto", height: "250px" }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ fontWeight: "bold" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              sx={{ fontSize: "15px" }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Price: $ {price}
            </Typography>
            <Box>
              <Typography component="legend">Reviews ({reviews})</Typography>
              <Rating name="read-only" value={parseInt(rating)} readOnly />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Link style={{ textDecoration: "none" }} to={`/services/${_id}`}>
                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "black" },
                  }}
                >
                  view service
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default SingleService;
