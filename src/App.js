import { Box } from "@mui/material";
import React from "react";
import UserForm from "./components/UserForm";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: "50px",
        }}
      >
        <UserForm />
      </Box>
    </>
  );
};

export default App;
