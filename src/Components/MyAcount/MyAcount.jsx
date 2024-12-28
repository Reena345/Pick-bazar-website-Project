import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,

} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../../assits/acount-profile.webp";

const ProfileDashboard = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(localStorage.getItem("name") || "John Doe");
  const [bio, setBio] = useState(localStorage.getItem("bio") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "admin@demo.com");

  const handleSaveProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("bio", bio);
    alert("Profile updated!");
  };

  const handleUpdateEmail = () => {
    localStorage.setItem("email", email);
    alert("Email updated!");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              marginBottom: 3,
              py: 10,
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Wallet Points
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Total
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Used
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="body2" color="textSecondary">
                  Available
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 2,
              borderRadius: 2,
              py: "50px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ marginBottom: 3, cursor: "pointer" }}
              onClick={() => navigate("/ChangePassword")}
            >
              Change Password
            </Typography>
            {[
              "Profile",
              "My Orders",
              "Downloads",
              "My Wishlists",
              "My Questions",
              "My Refunds",
              "My Reports",
              "My Cards",
              "Need Help",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  marginBottom: 3,
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
            <Typography
              variant="body1"
              sx={{
                marginBottom: 2,
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 2 }}>
            <Divider sx={{ marginY: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginY: 2 }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ProfileImage}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Button
                variant="contained"
                color="success"
                component="label"
                sx={{ alignSelf: "flex-start" }}
              >
                Upload
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>

            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              fullWidth
              label="Bio"
              multiline
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a short bio..."
              sx={{ marginBottom: 3 }}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ alignSelf: "flex-start" }}
              onClick={handleSaveProfile}
            >
              Save
            </Button>
          </Box>
          <Box
            sx={{ backgroundColor: "#fff", padding: 3, borderRadius: 2, marginTop: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              Email
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: 3 }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleUpdateEmail}
            >
              Update
            </Button>
          </Box>
          {/*  */}

          <Box
            sx={{
              padding: 3,
              backgroundColor: "#f9f9f9",

            }}
          >
            {/* Contact Number Section */}
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                marginBottom: 3,
              }}
            >
              <Box sx={{
                justifyContent: "space-between",
                display: "flex"
              }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Contact Number
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "success",
                  }}
                >
                  + Update
                </Typography>
              </Box>
              <Box
                sx={{
                  border: "black"
                }}
              >
                <TextField
                  fullWidth
                  placeholder="+1 (936) 514-1641"
                />
              </Box>
            </Box>

            {/* Addresses Section */}
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: 2,
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <Box sx={{
                justifyContent: "space-between",
                display: "flex"
              }}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Addresses
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "success",
                  }}
                >
                  + Add
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      backgroundColor: "#f9f9f9",
                      padding: 2,
                      borderRadius: 2,
                      height: "100%",
                      boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ marginBottom: 1 }}
                    >
                      Billing
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      2231 Kidd Avenue, AK, Kipnuk, 99614, United States
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      backgroundColor: "#f9f9f9",
                      padding: 2,
                      borderRadius: 2,
                      height: "100%",
                      boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ marginBottom: 1 }}
                    >
                      Shipping
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      2148 Stratford Park, KY, Winchester, 40391, United States
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ marginTop: 2, textAlign: "right" }}>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDashboard;
