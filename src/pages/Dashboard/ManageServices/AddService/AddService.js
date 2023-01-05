import { Button, Paper, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddService = () => {
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
    axios
      .post("https://mobile-panda.onrender.com/service", service)
      .then((res) => {
        if (res.data.insertedId) {
          toast("service inserted successfully");
          e.target.reset();
        }
      })
      .catch((error) => {
        toast(error);
      })
      .finally(() => setLoading(false));
    e.preventDefault();
  };

  return (
    <>
      <Paper
        sx={{ marginX: "auto", textAlign: "center", p: 3 }}
        style={{ height: "auto", width: "80%" }}
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
          />
          <TextField
            onChange={handleChange}
            size="small"
            required
            label="Service Name"
            type="text"
            name="name"
            sx={{ width: 1, mb: 2 }}
          />
          <Select
          size="small"
            label="Service Category"
            onChange={handleChange}
            sx={{ width: 1, mb: 2 }}
            name="category"
            required
          >
            <MenuItem value={"apple"}>apple</MenuItem>
            <MenuItem value={"samsung"}>samsung</MenuItem>
            <MenuItem value={"xiaomi"}>xiaomi</MenuItem>
          </Select>
          <TextField
            onChange={handleChange}
            size="small"
            required
            label="Price"
            type="number"
            name="price"
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
          size="small"
            onChange={handleChange}
            label="camera"
            required
            rows={4}
            name="camera"
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
          size="small"
            onChange={handleChange}
            label="First Release"
            required
            rows={4}
            name="firstRelease"
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            label="Description"
            multiline
            required
            rows={4}
            name="description"
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            size="small"
            label="Average Ratings (Fake)"
            required
            type="number"
            name="rating"
            sx={{ width: 1, mb: 2 }}
          />
          <TextField
            onChange={handleChange}
            size="small"
            label="Total Reviews (Fake)"
            required
            type="number"
            name="reviews"
            sx={{ width: 1, mb: 2 }}
          />

          <Button variant="contained" color="primary" type="submit">
            {loading ? "loading" : "Add Product"}
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default AddService;
