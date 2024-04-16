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
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 100,
          padding: 20,
        }}
      >
        <Typography variant="h4">
          Welcome to CodeCourse. Sign up below.
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
      </div>
    </>
  );
}

export default Signup;
