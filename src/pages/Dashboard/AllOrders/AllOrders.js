import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../components/shares/Loading/Loading';

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

  // for loading data from server
  const {
    data: allOrder,
    setAllOrder,
    isLoading,
    refetch,
  } = useQuery("allOrder", () =>
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

      

      //for confirm order
  const handleConfirmOrder = (id) => {
    const matchedOrder = allOrder.filter((order) => order._id === id);
    matchedOrder[0].status = "Confirmed";

    fetch(`http://localhost:5000/order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(matchedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Order Confirmed");
        refetch();
      });
  };

  //for delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Order Deleted SuccessFully");
            const remaining = allOrder.filter((order) => order._id !== id);
            setAllOrder(remaining);
          }
        });
    }
  };

    return (
        <>
      <h2>Order List: {allOrder.length}</h2>
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
            {allOrder.map((order, index) => (
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