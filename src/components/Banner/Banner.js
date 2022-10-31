import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#FBD062",
          paddingBottom: "30px",
          paddingTop: { lg: "10px", md: "10px", sm: "10px", xs: "10px" },
          paddingX: "30px",
        }}
      >
        <Grid
          sx={{ alignItems: "center", textAlign:"start", justifyContent: "space-evenly" }}
          container
          rowSpacing={1}
        >
          <Grid item xs={12} lg={3.5}>
            <Box sx={{ marginBottom: { xs: 2, lg: 0 }, marginLeft: { xl: 10, md: 0 , lg: 0} }}>
              <Typography
                variant="h1"
                sx={{fontSize:"45px", fontWeight: "800", marginBottom: "10px" }}
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Comfortable Interfaces and Unbeatable Price.
              </Typography>
              <Typography sx={{ mb: 1 }} variant="body1" gutterBottom>
                Let's find your favourite mobile here. <br />
                With the best price and quality. Also we have a lot of offers. Find out more. Grab your mobile now.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "black",
                  textTransform: "capitalize",
                  px: 6,
                  py: 1,
                  ":hover": { backgroundColor: "black" },
                }}
                variant="contained"
              >
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box sx={{ marginTop: { lg: 0, md: 0, sm: 3, xs: 3 } }}>
              <img
                className="vert-move"
                style={{ width: "100%" }}
                src="https://i.ibb.co/1TjR7rk/My-project.png"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
