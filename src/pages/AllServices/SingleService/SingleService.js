import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({singleService}) => {
    const {name, description, image, price, _id} = singleService;

    return (
        <Grid sx={{marginY: '10px'}} item xs={12} md={4}>
        <Paper elevation={16} sx={{borderRadius: '30px'}}>
        <Card sx={{borderRadius: '30px'}}>
        <CardMedia
          component="img"
          sx={{width: '100%', margin: 'auto', height: '200px'}}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography sx={{}} gutterBottom variant="h6" component="div">
            Price: $ {price}
          </Typography>
          <Typography sx={{}} variant="body2" color="text.secondary">
            {description.slice(0, 120)}
          </Typography>
          <Box sx={{textAlign: 'center', marginTop: '20px'}}>
            <Link style={{textDecoration: 'none'}} to={`/services/${_id}`}>
               <Button variant="contained" sx={{px: 4, borderRadius: '10px', textTransform: 'capitalize', backgroundColor: 'black', ":hover": {backgroundColor: 'black'}}}>view service</Button>
            </Link>
          </Box>
        </CardContent>
       </Card>
        </Paper>
     </Grid>
    );
};

export default SingleService;