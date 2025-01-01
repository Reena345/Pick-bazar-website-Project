import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import {
  Box,
  Button,
  FormControl,
  Menu,
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
import AuthModal from "../Forms/LoginPage/LoginPage";
import accountProfile from "../../assits/acount-profile.webp";

import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [product, setProduct] = useState("");

  const handleChange = (event) => {
    setProduct(event.target.value);
  };
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState();
  console.log(user, "user");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("users"));
    console.log(loggedInUser, "loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleOpenModal = () => setOpenModal(true);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    setUser(null);
    navigate("/");
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
            {user ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <img
                    className=""
                    src={accountProfile}
                    alt=""
                    srcset=""
                    width={40}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/ProfileDashboard">Profile</Link>{" "}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button 
                className="me-2 "
                sx={{
                  textTransform: "none",
                  background: "#019376",
                  color: "white",
                  display: { xs: "none", md: "flex" },
                  "&:hover": { background: "#017a5f" },
                }}
                variant="contained"
                onClick={handleOpenModal}
              >
                Join
              </Button>
            )}

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                background: "#019376",
                display: { xs: "none", sm: "flex" },
              }}
            >
              Become a Seller
            </Button>

            <AuthModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
            />
            <ToastContainer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
