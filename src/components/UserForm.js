import React, { useState } from "react";
import Confirm from "./Confirm";
import Success from "./Success";
import UserFormDetails from "./UserFormDetails";
import UserFormPersonalData from "./UserFormPersonalData";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [step, setStep] = useState(1);

  const state = { firstName, lastName, email, occupation, city, bio };
  const handleChange = {
    setFirstName,
    setLastName,
    setEmail,
    setOccupation,
    setCity,
    setBio,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep((currentStep) => (currentStep += 1));
  };

  const handleBack = () => {
    setStep((currentStep) => (currentStep -= 1));
  };

  console.log(state);

  switch (step) {
    case 1:
      return (
        <UserFormDetails
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    case 2:
      return (
        <UserFormPersonalData
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    case 3:
      return (
        <Confirm
          state={state}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      );
    case 4:
      return <Success />;
    default:
      return <UserForm />;
  }
};

export default UserForm;
