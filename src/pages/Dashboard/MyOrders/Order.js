import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Order = ({order, orders, setOrders}) => {
    const {service, image, price, status, _id} = order;

    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                const remainingOrders = orders.filter(order => order._id !== id);
                setOrders(remainingOrders);
            }
        })
    };
    return (
        <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ mx: "auto", mb: "25px", borderRadius: "20px" }}>
      <CardMedia
          component="img"
          sx={{width: '80%', margin: 'auto', marginTop:"15px", height: '200px'}}
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
              {service}
            </Typography>
            <Typography
            sx={{ fontWeight: "bold" }}
            gutterBottom
            variant="body1"
            component="div"
          >
            Price: $ {price} <br />
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 1,
            }}
          >
            <CardActions sx={{  marginLeft: "5px" }}>
          <Button
            sx={{ textTransform: "capitalize", backgroundColor: "red", color:"white", fontSize: "17px", borderRadius: "10px", ":hover": { backgroundColor: "red" } }}
            onClick={() => handleDeleteOrder(_id)}
          >
            cancel Order
          </Button>
        </CardActions>
            {status === "Pending" ? (
              <Typography
                sx={{
                  backgroundColor: "#FF827C",
                  color: "white",
                  borderRadius: 2,
                  px: 2,
                  paddingTop: "15px",
                }}
                gutterBottom
                variant="body1"
                component="div"
              >
                {status}...
              </Typography>
            ) : (
              <Typography
                sx={{
                  backgroundColor: "#57D568",
                  color: "white",
                  borderRadius: 2,
                  px: 2,
                  paddingTop: "5px",
                }}
                gutterBottom
                variant="body1"
                component="div"
              >
                {status}
              </Typography>
            )}
          </Box>
          
        </CardContent>
      </Card>
    </Grid>
    );
};

export default Order;