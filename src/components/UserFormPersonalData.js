import { Box, Button, TextField } from "@mui/material";
import React from "react";

const UserFormPersonalData = ({
  state,
  handleChange,
  handleSubmit,
  handleBack,
}) => {
  const { occupation, city, bio } = state;
  const { setOccupation, setCity, setBio } = handleChange;

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
        label="Occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          gap: "80px",
        }}
      >
        <Button variant="outlined" color="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default UserFormPersonalData;
