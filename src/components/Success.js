import { Typography } from "@mui/material";
import React from "react";

const Success = () => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Thank You For Your Submission
      </Typography>
      <Typography align="center">
        You will get an email with futher instructions.
      </Typography>
    </>
  );
};

export default Success;
