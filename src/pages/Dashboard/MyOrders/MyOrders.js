import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
        }
    }, [user]);
    return (
        <Container sx={{ pt: 4 }}>
            <h2>My Orders{myOrders.length}</h2>
        {myOrders.length === 0 ? (
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold", marginTop: 25 }}
            gutterBottom
            variant="h4"
            component="div"
          >
            Did not any order!!!
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {myOrders.map((order) => (
              <Order
                key={order._id}
                order={order}
                orders={myOrders}
                setOrders={setMyOrders}
              ></Order>
            ))}
          </Grid>
        )}
  
        <div className="content">
          <Outlet />
        </div>
      </Container>
    );
};

export default MyOrders;