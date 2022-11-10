import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { accountService } from "_services";
import appRoutes from "routes";

import "./Login.scss";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      formik.setSubmitting(true);
      accountService
        .login(values)
        .then(() => {
          window.alert("Login Success!");
          const { from } = location.state || {
            from: { pathname: appRoutes.Dashboard.path },
          };
          navigate(from);
        })
        .catch((err) => {
          window.alert(`An Error Occurred: ${err}`);
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });

  return (
    <div className="Login" data-testid="Login">
      <div className="text-container">
        <h2>Welcome!</h2>
        <p>Enter details to login.</p>
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
              variant="contained"
              disabled={formik.isSubmitting}
              type="submit"
              className="w-100-all"
            >
              {formik.isSubmitting && (
                <span className="spinner-loader">
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
