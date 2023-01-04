import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  const handleServiceUpload = (e) => {
    setLoading(true);
    axios.put(`https://mobile-panda.onrender.com/service/${id}`, service)
      .then((res) => {
        toast("Service Updated Successfully");
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => setLoading(false));
    e.preventDefault();
  };

  useEffect(() => {
    axios.get(`https://mobile-panda.onrender.com/service/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id]);
  return (
    <>
      <Paper
        sx={{ marginX: "auto", textAlign: "center", p: 4 }}
        style={{ height: "auto", width: "70%" }}
      >
        <form onSubmit={handleServiceUpload}>
          <TextField
            onChange={handleChange}
            size="small"
            required
            label="Service Image Url"
            type="text"
            name="image"
            sx={{ width: 1, mb: 2 }}
            value={service.image || ""}
          />
          <TextField
            onChange={handleChange}
            size="small"
            required
            label="Service Name"
            type="text"
            name="name"
            value={service.name || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            size="small"
            required
            label="Price"
            type="text"
            name="price"
            value={service.price || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            size="small"
            onChange={handleChange}
            label="camera"
            required
            rows={4}
            name="camera"
            value={service.camera || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            size="small"
            onChange={handleChange}
            label="First Release"
            required
            rows={4}
            name="firstRelease"
            value={service.firstRelease || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            size="small"
            onChange={handleChange}
            label="Description"
            multiline
            required
            rows={4}
            name="description"
            value={service.description || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            size="small"
            label="Average Ratings (Fake)"
            required
            type="text"
            name="rating"
            value={service.rating || ""}
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            size="small"
            label="Total Reviews (Fake)"
            required
            type="text"
            name="reviews"
            value={service.reviews || ""}
            sx={{ width: 1, mb: 2 }}
          />

          <Button variant="contained" color="primary" type="submit">
            {loading ? "loading" : "Update Service"}
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default UpdateService;
