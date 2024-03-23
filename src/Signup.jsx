import React from "react";

function Signup() {
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
        <Typography level="h4">
          Welcome to CodeCourse. Sign up below.
        </Typography>
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
              label="Username"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              type="email"
              id="outlined-basic"
              sx={{ width: 300 }}
              label="Email"
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
            <TextField
              type="password"
              id="outlined-basic"
              sx={{ width: 300 }}
              label="Confirm Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button variant="contained">Sign up</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Signup;
