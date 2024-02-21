import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import normalizeRegister from "./normalizeRegister";

import validate from "../../validation/registerValidation";

const RegisterPage = () => {
 
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  useEffect(()=>{
  },[errors])
  const navigate = useNavigate();
  const handleInputsChange = (e) => {
   
    setInputsValue((CopyOfCurrentValue) => ({
      ...CopyOfCurrentValue,
      [e.target.id]: e.target.value,
    }));
  };
  const handleInputsBlur = (e) => {
    const { id, value } = e.target;
    const validationResult = validate[id] ? validate[id](value) : null;
    if (validationResult && validationResult.error) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: validationResult.error.details[0].message,
        }));
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: ""
        }));
    }
};

const allRequiredFieldsFilled = ['first', 'last', 'email', 'password', 'phone', 'country', 'city', 'street', 'houseNumber', 'zip']
        .every(field => inputsValue[field].trim() !== '');

    const noValidationErrors = Object.values(errors).every(error => error === '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users", normalizeRegister(inputsValue));
      navigate(ROUTES.LOGIN);
    } catch (err) {
      alert("Something went wrong");
    }
  };
  return (
    <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            autoComplete="given-name"
            name="first"
            required
            fullWidth
            id="first"
            label="First Name"
            autoFocus
            value={inputsValue.first}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
          {errors.first && <Alert severity="error">{errors.first}</Alert>}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            autoComplete="given-name"
            name="middle"
            fullWidth
            id="middle"
            label="Middle Name"
            value={inputsValue.middle}
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            id="last"
            label="Last Name"
            name="last"
            autoComplete="family-name"
            value={inputsValue.last}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
            />
            {errors.last && <Alert severity="error">{errors.last}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={inputsValue.email}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.email && <Alert severity="error">{errors.email}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={inputsValue.password}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.password && <Alert severity="error">{errors.password}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="phone"
            label="Phone"
            id="phone"
            autoComplete="new-phone"
            value={inputsValue.phone}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="url"
            label="Url"
            id="url"
            autoComplete="new-url"
            value={inputsValue.url}
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="alt"
            label="Alt"
            id="alt"
            autoComplete="new-alt"
            value={inputsValue.alt}
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="state"
            label="State"
            id="state"
            autoComplete="new-state"
            value={inputsValue.state}
            onChange={handleInputsChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="country"
            label="Country"
            id="country"
            autoComplete="new-country"
            value={inputsValue.country}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.country && <Alert severity="error">{errors.country}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="city"
            label="City"
            id="city"
            autoComplete="new-city"
            value={inputsValue.city}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.city && <Alert severity="error">{errors.city}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="street"
            label="Street"
            id="street"
            autoComplete="new-street"
            value={inputsValue.street}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.street && <Alert severity="error">{errors.street}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="houseNumber"
            label="House Number"
            id="houseNumber"
            autoComplete="new-houseNumber"
            value={inputsValue.houseNumber}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.houseNumber && <Alert severity="error">{errors.houseNumber}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="zip"
            label="Zip"
            id="zip"
            autoComplete="new-zip"
            value={inputsValue.zip}
            onChange={handleInputsChange}
            onBlur={handleInputsBlur}
          />
           {errors.zip && <Alert severity="error">{errors.zip}</Alert>}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Business Account"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!allRequiredFieldsFilled || !noValidationErrors}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href={navigate(ROUTES.LOGIN)} variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default RegisterPage;
