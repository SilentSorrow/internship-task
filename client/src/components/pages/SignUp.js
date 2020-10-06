import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CenterContainer from "../CenterContainer";
import { TextField, Button } from "@material-ui/core";
import { signUp as userSignUp } from "../../actions/user.actions";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSignUp = async (formData) => {
    dispatch(await userSignUp(formData));
  };

  return (
    <CenterContainer>
      <form
        onSubmit={handleSubmit(onSignUp)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
        }}
      >
        <TextField
          name="fullName"
          label="Full Name"
          autoComplete="off"
          inputRef={register({ required: true })}
        />
        <TextField
          name="email"
          label="Email"
          autoComplete="off"
          inputRef={register({ required: true })}
        />
        <TextField
          name="age"
          label="Age"
          autoComplete="off"
          inputRef={register({ required: true })}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          inputRef={register({ required: true })}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </CenterContainer>
  );
};

export default SignUpPage;
