import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@material-ui/core";
import { userSignIn, resendEmail } from "../../actions/user.actions";

const SignInPage = ({ history }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const signIn = async (formData) => {
      dispatch(await userSignIn(formData));
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
        <form onSubmit={handleSubmit(signIn)} style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px"}}>
          <TextField name="email" label="Email" autoComplete="off" inputRef={register({ required: true })} />
          <TextField name="password" label="Password" type="password" autoComplete="off" inputRef={register({ required: true })} />
          <Button variant="contained" type="submit">Sign In</Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
