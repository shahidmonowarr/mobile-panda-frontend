import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ServiceList = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/service").then((res) => {
      setServices(res.data);
      setLoading(false);
    });
  }, []);

  const handleDeleteService = id => {
    setDeleteLoading(true);
    const remaining = services.filter(service => service._id !== id);
    axios.delete(`http://localhost:5000/service/${id}`)
        .then(res => {
            setServices(remaining);
            toast('Successfully Deleted');
        })
        .catch(error => {
            toast(error)
        })
        .finally(() => {
            setDeleteLoading(false);
        })

}

  return (
    <>
      {loading ? (
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{marginX:"auto"}} style={{ height: "80vh", width:"80%" }}>
          <Table Table sx={{ minWidth: "auto"}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service) => (
                <TableRow
                  key={service._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={service.image} alt="" width="59px" />
                  </TableCell>
                  <TableCell align="left">{service.name}</TableCell>
                  <TableCell align="center">${service.price}</TableCell>
                  <TableCell align="right">
                    <Button
                      as={NavLink}
                      variant="contained"
                      size="small"
                      color="info"
                      sx={{ mr: 1, textDecoration: "none" }}
                      to={`/dashboard/manageService/update/${service._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDeleteService(service._id)}
                    >
                      {deleteLoading ? "Loading" : "Delete"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ServiceList;
