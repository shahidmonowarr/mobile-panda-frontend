import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/shares/Footer/Footer";
import Header from "../../../components/shares/Header/Header";
import SingleService from "../SingleService/SingleService";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mobile-panda.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const [tempServices, setTempServices] = useState(services);

  const filterServices = (serviceCate) => {
    const cateServices = services.filter((currentService) => {
      return currentService.category === serviceCate;
    });
    if (serviceCate === "All") {
      setTempServices(services);
    } else {
      setTempServices(cateServices);
    }
  };

  return (
    <>
      <Header />
      <Box>
        <Typography
          sx={{ fontWeight: "bold", m: 2 }}
          variant="h4"
          component="div"
        >
          Our<span style={{ color: "#08C137" }}> Services</span>
        </Typography>
        <Typography
          sx={{ fontWeight: 400, mb: 5 }}
          variant="h6"
          component="div"
        >
          What we provide to our customers
        </Typography>
        <Container>
          <Grid sx={{ justifyContent: "center", mt: 3 }} container spacing={2}>
            <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  margin: "auto",
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
                onClick={() => filterServices("All")}
              >
                All
              </Button>
            </Grid>
            <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  margin: "auto",
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
                onClick={() => filterServices("apple")}
              >
                Apple
              </Button>
            </Grid>
            <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  margin: "auto",
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
                onClick={() => filterServices("samsung")}
              >
                Samsung
              </Button>
            </Grid>
            <Grid item lg={3} md={3} sm={5} xs={5} sx={{ margin: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  margin: "auto",
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "black" },
                }}
                onClick={() => filterServices("xiaomi")}
              >
                Xiaomi
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ marginTop: 10, marginBottom: 10 }}>
          <Grid container spacing={4}>
            {services.length <= 0 && (
              <Box sx={{ width: "3.5%", mx: "auto", mt: 5 }}>
                <CircularProgress />
              </Box>
            )}

            {tempServices.length === 0
              ? services.map((singleService) => (
                  <SingleService
                    key={singleService._id}
                    singleService={singleService}
                  ></SingleService>
                ))
              : tempServices.map((singleService) => (
                  <SingleService
                    key={singleService._id}
                    singleService={singleService}
                  ></SingleService>
                ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AllServices;
