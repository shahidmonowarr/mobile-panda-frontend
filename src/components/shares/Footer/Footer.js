import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#FBD062",
        textAlign: "start",
        marginTop: "100px",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          sx={{ justifyContent: "space-evenly", pt: 8, marginBottom: 3 }}
          container
        >
          <Grid item lg={2.8} md={2.8} xs={10}>
            <Box>
              <Box sx={{ width: "250px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://i.ibb.co/vqZxqCQ/Mobile-Panda-1-2.png"
                  alt=""
                />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "17px", paddingLeft: '5px', marginTop: 5 }}
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  A quick view of Mobile specific problems solved
                  by the awesome team at Mobile Panda.{" "}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2} md={2} xs={10}>
            <Typography
              sx={{ fontWeight: "bold", marginBottom: 4 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Links
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                About Us
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Latest News & Blog
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Meet The Team
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Popular Services{" "}
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Testimonials
              </Link>
            </Typography>
          </Grid>

          <Grid item lg={2} md={2} xs={10}>
            <Typography
              sx={{ fontWeight: "bold", marginBottom: 4 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Services
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Offers
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Apple
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Samsung
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Redmi
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: "17px", marginTop: 2 }}
              variant="body1"
              gutterBottom
              component="div"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services"
              >
                Content Writing
              </Link>
            </Typography>
          </Grid>

          <Grid item lg={2.5} md={2.5} xs={10}>
            <Box>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", marginBottom: 4 }}
                  variant="h5"
                  gutterBottom
                  component="div"
                >
                  Newsletter
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ marginTop: 3, fontSize: "17px" }}
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  With our newsletter, you will get the latest news and updates
                </Typography>
                <TextField
                  sx={{
                    marginTop: 1,
                    backgroundColor: "white",
                    borderRadius: 1,
                    border: "none",
                  }}
                  id="standard"
                  placeholder="Enter your email"
                  variant="outlined"
                />{" "}
                <br />
                <Button
                  sx={{
                    backgroundColor: "black",
                    mt: 2,
                    px: 4,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: "black" },
                  }}
                  variant="contained"
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <p
          style={{
            borderTop: "1px solid black",
            backgroundColor: "#FBD062",
            width: "90.5%",
            margin: "auto",
          }}
        />
        <Grid
          sx={{
            marginTop: 2,
            paddingBottom: 3,
            display: "flex",
            justifyContent: "center",

          }}
        >
          <Typography
            sx={{ fontSize: "17px" }}
            variant="body1"
            
            component="div"
          >
            All rights reserved Mobile Panda © 2022
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
