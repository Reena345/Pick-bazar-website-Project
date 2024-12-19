import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../../assits/grocery.webp";
import SearchIcon from "@mui/icons-material/Search";

const HeroSection = () => {
  return (
    <Box className="d-none d-md-none d-lg-block">
      <Box className="position-relative ">
        <img style={{height:'93vh',width:'100%'}} src={HeroImg} alt="" />
      </Box>
      <Box className="position-absolute top-50 start-50 translate-middle text-center">
        <Box>
          <Typography className="fw-bolder fs-1" >Groceries Delivered in 90 Minute</Typography>
          <Typography  variant="body">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </Typography>
        </Box>
        <Box
          sx={{ width: "85vh" }}
          className="d-flex  mt-5"
        >
          <TextField
            placeholder="Search product from here "
            className=" bg-white border-success Regular shadow"
            fullWidth
            size="medium"
          />
          <Button
            sx={{ width: "170px" }}
            className="bg-success"
            variant="contained"
          >
            <SearchIcon />
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
