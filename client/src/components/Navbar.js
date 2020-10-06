import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../actions/user.actions";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  const handleClick = async () => {
    dispatch(await logOut());
    Cookies.remove("SESS_ID");
    history.push("/signin");
  };

  return (
    <AppBar position="static" style={{ marginBottom: "50px" }}>
      <Toolbar>
        <Typography variant="h5">Inva</Typography>
        <div style={{ marginLeft: "auto" }}>
          {user ? (
            <div style={{ display: "flex" }}>
              <Typography variant="h6">{user.fullName}</Typography>
              <Button variant="contained" onClick={() => handleClick()} style={{ marginLeft: "20px" }}>
                Log Out
              </Button>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="contained">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "20px" }}
                >
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
