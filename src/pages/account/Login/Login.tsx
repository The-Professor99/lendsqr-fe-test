import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Login.scss";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lendsqr - Login Page";
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password should be of minimum 8 characters length")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/,
        "Password must contain atleast one letter, one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // onsubmit action will go here
      console.log(values);

      // simulate login
      setTimeout(() => {
        navigate({ pathname: "/" });
      }, 5000);
    },
  });

  return (
    <div className="Login" data-testid="Login">
      <div className="text-container">
        <h2>
          Welcome!
          <br />
          Enter details to login.
        </h2>
      </div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="w-100-all"
          />
          <TextField
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    variant="text"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </Button>
                </InputAdornment>
              ),
            }}
            label="Password"
            className="w-100-all"
          />
          <div className="forgot-password">
            <a href="#!">FORGOT PASSWORD?</a>
          </div>
          <div>
            <Button
              color="primary"
              variant="contained"
              disabled={formik.isSubmitting}
              type="submit"
              className="w-100-all"
            >
              {formik.isSubmitting && (
                <span className="me-1">
                  <CircularProgress />
                </span>
              )}
              LOG IN
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export { Login };
