import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Spec = ({ spec }) => {
  const { serviceName1, serviceName2, description, img } = spec;
  return (
    <Grid sx={{ ":hover": {boxShadow: 10, borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer', justifyContent: 'space-evenly', marginX: 'auto', mb: 5, transition: 'transform 0.5s'}} item xs={12} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: ' 0 auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{fontWeight: 'bold'}} variant="h5" component="div">
                        {serviceName1}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {serviceName2}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
  );
};

export default Spec;
