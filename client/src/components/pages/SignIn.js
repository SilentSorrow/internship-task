import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import CenterContainer from "../CenterContainer";
import { signIn as userSignIn, resendEmail } from "../../actions/user.actions";

const SignInPage = ({ history }) => {
  const [flag, setFlag] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSignIn = async(formData) => {
    if (!flag) {
      dispatch(await userSignIn(formData));
    } else {
      dispatch(await resendEmail(formData));
    }
    history.push("/");
  };

  return (
    <CenterContainer>
      <form
        onSubmit={handleSubmit(onSignIn)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
        }}
      >
        <TextField
          name="email"
          label="Email"
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
        <Button variant="contained" type="submit" onClick={() => setFlag(false)}>
          Sign In
        </Button>
        <Button variant="contained" type="submit" onClick={() => setFlag(true)}>
          Resend email
        </Button>
      </form>
    </CenterContainer>
  );
};

export default SignInPage;
