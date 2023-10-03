import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    occupation: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const { firstName, lastName, email, password, location, occupation } =
    userInput;

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/users/register", {
        firstName,
        lastName,
        email,
        password,
        location,
        occupation,
      })
      .then(() => {
        alert("Successful Registration");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Box component="div" className="reg-div">
      <Typography variant="h4" className="reg-title">
        Register{" "}
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="reg-form"
        onSubmit={submitHandler}
      >
        <TextField
          label="First Name"
          variant="outlined"
          className="text-field"
          margin="normal"
          name="firstName"
          onChange={changeHandler}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          className="text-field"
          margin="normal"
          name="lastName"
          onChange={changeHandler}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          onChange={changeHandler}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          onChange={changeHandler}
        />
        <TextField
          label="Location"
          variant="outlined"
          className="text-field"
          margin="normal"
          name="location"
          onChange={changeHandler}
        />
        <TextField
          label="Occupation"
          variant="outlined"
          className="text-field"
          margin="normal"
          name="occupation"
          onChange={changeHandler}
        />
        <Button variant="contained" type="submit">
          Register!
        </Button>
      </Box>
      <Typography className="bottom-text">
        Already have an account? <Link to="/">Login here</Link>
      </Typography>
    </Box>
  );
};
