import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
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
        <Typography level="h4">Welcome back, Login below.</Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <div
            style={{
              width: 300,
              padding: 30,
            }}
          >
            <TextField
              id="outlined-basic"
              sx={{ width: 300 }}
              label="Username or Email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="password"
              id="outlined-basic"
              sx={{ width: 300 }}
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button variant="contained">Login in</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Login;
