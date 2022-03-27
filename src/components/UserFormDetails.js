import { Box, TextField, Button } from "@mui/material";
import React from "react";

const UserFormDetails = ({ state, handleChange, handleSubmit }) => {
  const { firstName, lastName, email } = state;
  const { setFirstName, setLastName, setEmail } = handleChange;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        variant="outlined"
        label="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Next
      </Button>
    </Box>
  );
};

export default UserFormDetails;
