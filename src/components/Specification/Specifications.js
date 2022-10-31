import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Spec from "./Spec";

const Specifications = () => {
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    fetch("specification.json")
      .then((res) => res.json())
      .then((data) => setSpecs(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 'bold', m: 2 }}
          variant="h4"
          component="div"
        >
          WHAT MAKES THE<span style={{color: '#08C137'}}> DIFFERENT?</span>
        </Typography>
        <Typography sx={{ fontWeight: 400, mb: 5 }} variant="h6" component="div">
          EXPERIENCE HIGH PERFORMANCE AND SECURE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {specs.map((spec) => (
            <Spec key={spec.id} spec={spec}></Spec>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Specifications;
