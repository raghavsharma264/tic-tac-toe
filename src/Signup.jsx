import React, { useState } from "react";
import { Typography, Card, TextField, Button } from "@mui/material";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <Typography variant="h4">
          Welcome to CodeCourse. Sign up below.
        </Typography>
      </div>
      <Card variant="outlined" sx={{ maxWidth: 400 }}>
        <div style={{ width: 300, padding: 30 }}>
          <TextField
            id="username"
            sx={{ width: 300 }}
            label="Username"
            variant="outlined"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            type="email"
            id="email"
            sx={{ width: 300 }}
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            type="password"
            id="password"
            sx={{ width: 300 }}
            label="Password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <TextField
            type="password"
            id="confirmPassword"
            sx={{ width: 300 }}
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained">Sign up</Button>
        </div>
      </Card>
    </>
  );
}

export default Signup;
