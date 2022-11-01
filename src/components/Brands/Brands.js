import { Container, Grid } from "@mui/material";
import { Box } from '@mui/system';
import React from 'react';

const Brands = () => {
    return (
        <Container sx={{mt: {xs: 4, lg: 11}}}>
      <Grid style={{justifyContent: 'space-evenly', alignItems: 'center'}} container spacing={2}>
        <Grid sx={{":hover": {borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer'}} item xs={3.5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
          <img style={{width: '70%'}} src="https://i.ibb.co/Ch1wv57/oneplus.png" alt="" /> 
          </Box>
        </Grid>
        <Grid sx={{":hover": {borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer'}} item xs={3.5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '100%'}} src="https://i.ibb.co/4Jzhxkm/samsung.png" alt="" />
          </Box>
        </Grid>
        <Grid sx={{":hover": {borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer'}} item xs={3.5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '70%'}} src="https://i.ibb.co/zGbp43c/apple.png" alt="" />
          </Box>
        </Grid>
        <Grid sx={{":hover": {borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer'}} item xs={3.5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
          <img style={{width: '90%'}} src="https://i.ibb.co/mcTc2F8/oppo.png" alt="" />
          </Box>
        </Grid>
        <Grid sx={{":hover": {borderRadius: 5, transform: 'scale(1.05)'}, cursor: 'pointer'}} item xs={3.5} md={1.5} lg={1.5}>
          <Box style={{ margin: 'auto'}}>
             <img style={{width: '75%'}} src="https://i.ibb.co/w4s1mJh/xiaomi.png" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Brands;