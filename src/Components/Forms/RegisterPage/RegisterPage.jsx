import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import {
  BorderOuterRounded,
  Email,
  Password,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../../assits/Logo-new.webp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const RegisterPage = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    firstName: yup.string().min(4).max(10).required("First Name is Required"),
    email: yup.string().required("Your email  is Required"),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required("Password  is Required"),
  });
  const signUpValue = {
    firstName: "",
    email: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: signUpValue,
    resolver: yupResolver(schema),
  });
  const signUp = (data) => {
    console.log(data);

    reset();
  };
  console.log(errors, "");

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container mt-2">
            <Grid container>
              <Grid item sx={12} sm={12} md={12} className="text-center"></Grid>
              <Grid item sx={12} sm={12} md={12}>
                <Box>
                  <Box className="text-center mb-4 align-items-center ms-3 ">
                    <img
                      className=" ms-5 ps-5 img-fluid  mb-3"
                      src={logo}
                      alt=""
                    />
                    <Typography variant="body-2">
                      By signing up, you agree to our{" "}
                      <a className="text-success" href="">
                        terms
                      </a>{" "}
                      &{" "}
                      <a className="text-success" href="">
                        policy
                      </a>
                    </Typography>
                  </Box>
                  <form onSubmit={handleSubmit(signUp)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Controller
                          name="firstName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              type="text"
                              fullWidth
                              size="small"
                              {...field}
                            />
                          )}
                        />
                        <p className="text-danger">
                          {errors?.firstName?.message}
                        </p>
                      </Grid>
                      <Grid item xs={12}>
                        <InputLabel htmlFor="component-simple">
                          Email
                        </InputLabel>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              type="email"
                              fullWidth
                              size="small"
                              {...field}
                            />
                          )}
                        />
                        <p className="text-danger">{errors?.email?.message}</p>
                      </Grid>
                      <Grid item xs={12}>
                        <InputLabel htmlFor="component-simple">
                          Password
                        </InputLabel>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => (
                            <OutlinedInput
                              {...field}
                              fullWidth
                              size="small"
                              id="outlined-adornment-weight"
                              type={showPassword ? "text" : "password"}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label={
                                      showPassword
                                        ? "hide the password"
                                        : "display the password"
                                    }
                                    edge="end"
                                    onClick={() => {
                                      setShowPassword(!showPassword);
                                    }}
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                "aria-label": "weight",
                              }}
                            />
                          )}
                        />
                        <p className="text-danger">
                          {errors?.password?.message}
                        </p>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          className="bg-success"
                          variant="contained"
                          fullWidth
                        >
                          Register
                        </Button>
                      </Grid>
                      <Box>
                        <Divider
                          sx={{ borderColor: "#333", width: "100%" }}
                          variant="fullwidth"
                        />
                      </Box>
                      <Box className="ms-3 mt-5">
                        <Typography
                          variant="body"
                          className=" ms-5 ps-5  text-center"
                        >
                          Already have an account?
                          <a className="text-success" href="">
                            Login
                          </a>
                        </Typography>
                      </Box>
                      <Grid item xs={12} className="border-bottom mt-4">
                        <Button
                          className="bg-secondery  "
                          variant="contained"
                          fullWidth
                        >
                          Register
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          className="bg-success"
                          variant="contained"
                          fullWidth
                        >
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterPage;
