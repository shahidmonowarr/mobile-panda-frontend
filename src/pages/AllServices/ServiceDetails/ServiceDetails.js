import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails] = useServiceDetails(serviceId);

  return (
    <Box>
      <Grid
        sx={{
          justifyContent: "space-evenly",
          marginTop: "40px",
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        <Grid item lg={5} md={5} xs={11}>
          <Box
            sx={{
              width: "100%",
              marginX: "auto",
            }}
          >
            <img style={{ width: "100%" }} src={serviceDetails.image} alt="" />
          </Box>
        </Grid>
        <Grid item lg={5} md={5} xs={11}>
          <Box sx={{ marginBottom: "40px" }}>
            <Box textAlign={"left"} sx={{ marginX: "auto" }}>
              <Box sx={{ marginBottom: "30px" }}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  {serviceDetails.name}
                </Typography>
                <Box sx={{ marginX: "start" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <Rating
                        sx={{ marginTop: "-30px" }}
                        variant="body2"
                        defaultValue={4.4}
                        readOnly
                      />
                    </Box>
                    <Box sx={{ paddingLeft: 1 }}>
                      <Typography
                        sx={{ color: "#EFB101" }}
                        variant="body2"
                        gutterBottom
                        component="div"
                      >
                        Based on 185 reviews
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <hr
                  style={{
                    border: "0.7px solid #CCCCCC",
                    backgroundColor: "#CCCCCC",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ marginTop: "-10px", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Price: $ {serviceDetails.price}
                </Typography>
                <Typography
                  sx={{ marginTop: "-10px", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  First Release: {serviceDetails.firstRelease}
                </Typography>
                <Typography
                  sx={{ marginTop: "-10px", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Camera: {serviceDetails.camera}
                </Typography>
                <br />
                <Typography
                  sx={{ marginTop: "-5px" }}
                  variant="body1"
                  gutterBottom
                  component="div"
                >
                  {serviceDetails.description}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  What we provide?
                </Typography>
                <ul>
                  <li>24/7 customer support</li>
                  <li>Our Best team will work on your product</li>
                  <li>Immediate response to your email </li>
                  <li>We committed to deliver your products on time</li>
                </ul>
              </Box>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  px: 4,
                  marginTop: 3,
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceDetails;
