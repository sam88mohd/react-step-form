import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Confirm = ({ state, handleBack, handleSubmit }) => {
  const { firstName, lastName, email, occupation, city, bio } = state;

  return (
    <Box>
      <List>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="First Name:" secondary={firstName} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Last Name:" secondary={lastName} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Email:" secondary={email} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Occupation:" secondary={occupation} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="City:" secondary={city} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Bio:" secondary={bio} />
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "80px",
        }}
      >
        <Button variant="outlined" color="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Confirmed & submit
        </Button>
      </Box>
    </Box>
  );
};

export default Confirm;
