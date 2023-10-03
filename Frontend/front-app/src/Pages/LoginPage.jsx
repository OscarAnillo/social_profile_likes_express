import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../Redux/Features/User-slice";

export const LoginPage = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const { email, password } = userInput;
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please provide the required info!");
    }
    axios
      .post("http://localhost:3005/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUserInput(res.data);
        dispatch(setLogin(res.data));
        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Box component="div" className="login-div">
      <Typography variant="h4" className="login-title">
        Login
      </Typography>
      <Box
        component="form"
        className="login-form"
        onSubmit={submitHandler}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <Button variant="contained" type="submit" size="large">
          login
        </Button>
      </Box>
      <Typography className="bottom-text">
        Dont have an account? <Link to="/register">Register here!</Link>
      </Typography>
    </Box>
  );
};
