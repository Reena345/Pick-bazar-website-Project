import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../assits/Logo-new.webp";
// icons
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MedicationIcon from "@mui/icons-material/Medication";
import BrushIcon from "@mui/icons-material/Brush";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import LoginPage from "../Forms/LoginPage/LoginPage";
import RegisterPage from "../Forms/RegisterPage/RegisterPage";

const Header = () => {
  const [product, setProduct] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);


  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  
  return (
    <Box>
      <AppBar className=" bg-white " position="static">
        <Toolbar className=" d-flex justify-content-between align-items-center">
          <Box className="d-flex align-items-center">
            <Box className="text-black d-flex align-items-center">
              <Box className=" d-block d-md-none d-lg-none">
                {" "}
                <FormatAlignLeftIcon />
              </Box>
              <img className=" img-fluid w-75 h-75 me-5" src={logo} alt="" />
            </Box>

            <div className="d-none d-sm-none d-md-block">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  className="text-success "
                  size="small"
                  value={product}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <AppleIcon />
                    Grocery
                  </MenuItem>
                  <MenuItem className="ms-2" value={15}>
                    <LunchDiningIcon />
                    Bakery
                  </MenuItem>
                  <MenuItem className="ms-2" value={16}>
                    <BrushIcon />
                    Makeup
                  </MenuItem>
                  <MenuItem className="ms-2" value={17}>
                    <ShoppingBagIcon />
                    Bags
                  </MenuItem>
                  <MenuItem className="ms-2" value={18}>
                    <CardGiftcardIcon />
                    Clothing
                  </MenuItem>
                  <MenuItem className="ms-2" value={19}>
                    <EventSeatIcon />
                    Furniture
                  </MenuItem>
                  <MenuItem className="ms-2" value={20}>
                    <AppleIcon />
                    Daily Needs
                  </MenuItem>
                  <MenuItem className="ms-2" value={21}>
                    <MenuBookIcon />
                    Books
                  </MenuItem>
                  <MenuItem className="ms-2" value={22}>
                    <HeadphonesIcon />
                    Gadget
                  </MenuItem>
                  <MenuItem className="ms-2" value={23}>
                    <MedicationIcon />
                    Medicine
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
          <Box className="d-flex align-items-center ">
            <Box className="d-flex ">
              <Typography className="text-black d-none d-sm-none d-md-none d-lg-block">
                Shops
              </Typography>
              <Typography className="text-black mx-3 d-none d-sm-none d-md-none d-lg-block">
                Offers
              </Typography>
              <Typography className="text-black d-none d-sm-none d-md-none d-lg-block">
                Contact
              </Typography>
              <Typography className="text-black mx-3 d-none d-sm-none d-md-none d-lg-block">
                Pages
              </Typography>
            </Box>
            <Box className="d-flex">
              <Button
                className="text-white mx-4 bg-success"
                onClick={handleOpenModal}
              >
                Join
              </Button>
              <Button className="text-white mx-4 bg-success d-none d-sm-none d-md-block">
                Become a Seller
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <RegisterPage open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Header;
