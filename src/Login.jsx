import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameOrEmailChange = (event) => {
    setUsernameOrEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", { usernameOrEmail, password });
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
        <Typography variant="h4">Welcome back, Login below.</Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                width: 300,
                padding: 30,
              }}
            >
              <TextField
                id="username-email"
                sx={{ width: 300 }}
                label="Username or Email"
                variant="outlined"
                value={usernameOrEmail}
                onChange={handleUsernameOrEmailChange}
              />
              <br />
              <br />
              <TextField
                type="password"
                id="password"
                sx={{ width: 300 }}
                label="Password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <br />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Login;
