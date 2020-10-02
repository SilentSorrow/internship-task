import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@material-ui/core";
import { userSignUp } from "../../actions/user.actions";

const SignUpPage = ({ history }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  
  const onSubmit = async (formData) => {
    dispatch(await userSignUp(formData));
    history.push("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3} >
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px"}}>
          <TextField name="fullName" label="Full Name" autoComplete="off" inputRef={register({ required: true })} />
          <TextField name="email" label="Email" autoComplete="off" inputRef={register({ required: true })} />
          <TextField name="age" label="Age" autoComplete="off" inputRef={register({ required: true })} />
          <TextField name="password" label="Password" type="password" autoComplete="off" inputRef={register({ required: true })} />
          <Button variant="contained" type="submit">Sign Up</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
