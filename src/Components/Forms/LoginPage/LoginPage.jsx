import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assits/Logo-new.webp";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function AuthModal({ openModal, setOpenModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() && isRegister) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      alert("Login successful!");
      handleClose();
      navigate("/");
    } else {
      alert("Invalid credentials. Please register first.");
    }

    setErrors({});
    setFormData({ name: "", email: "", password: "" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please log in.");
    setIsRegister(false);

    setErrors({});
    setFormData({ name: "", email: "", password: "" });
  };

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="my-4 pb-3"
        >
          <img src={Logo} alt="PickBazar Logo" style={{ height: 40 }} />
          <Typography variant="subtitle1" sx={{ mt: 1, color: "#666" }}>
            {isRegister
              ? "Create an account to get started"
              : "Login with your email & password"}
          </Typography>
        </Box>

        <Stack spacing={2} component="form" noValidate>
          {isRegister && (
            <TextField
              fullWidth
              placeholder="Enter Name"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          )}
          <TextField
            type="email"
            fullWidth
            placeholder="Enter Email"
            size="small"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            placeholder="Enter Password"
            size="small"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{ minWidth: 0, padding: 0 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          {isRegister ? (
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              onClick={handleRegister}
              sx={{ textTransform: "none" }}
            >
              Register
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              onClick={handleLogin}
              sx={{ textTransform: "none" }}
            >
              Login
            </Button>
          )}
          <Typography align="center" variant="body2">
            OR
          </Typography>
          {!isRegister && (
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Login with Mobile Number
            </Button>
          )}
          {!isRegister && (
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ textTransform: "none" }}
            >
              Login with Google
            </Button>
          )}
          <Typography align="center" sx={{ mt: 2 }}>
            {isRegister ? (
              <>
                Already have an account?{" "}
                <Button onClick={toggleForm} sx={{ textDecoration: "none" }}>
                  Login
                </Button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Button onClick={toggleForm} sx={{ textDecoration: "none" }}>
                  Register
                </Button>
              </>
            )}
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
}
