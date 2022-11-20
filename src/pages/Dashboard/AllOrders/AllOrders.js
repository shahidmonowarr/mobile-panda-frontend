import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    

      useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllOrders(data);
        })
      }, [allOrders]);

      const handleDeleteOrder = (id) => {
      };

      const handleConfirmOrder = (id) => {};
    return (
        <>
      <h2>Order List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "auto" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Index</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Service</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Update Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((order, index) => (
              <StyledTableRow key={order._id}>
                <StyledTableCell component="th" scope="row">
                {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{order.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {order.service}
                </StyledTableCell>
                <StyledTableCell align="right">{order.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => handleConfirmOrder(order._id)}>
                    Confirm
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => handleDeleteOrder(order._id)}>
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    );
};

export default AllOrders;