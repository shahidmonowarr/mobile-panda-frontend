import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if(user){
            fetch(`https://mobile-panda.onrender.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                  'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
              // console.log("res",res);
              if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('token');
                navigate('/');
              }
              return res.json();
            })
            .then(data => {
              const myAllOrders = data.filter(singleOrder => singleOrder.email === user.email);
              setMyOrders(myAllOrders);
            });
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