import React from "react";
import { AppBar, Toolbar, Button, Typography} from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static" style={{marginBottom: "50px"}}>
      <Toolbar>
        <Typography variant="h5">
          Inva
        </Typography>
        <div style={{marginLeft: "auto"}}> 
          <Button variant="contained">
            Sign In
          </Button>
          <Button variant="contained" color="primary" style={{marginLeft: "20px"}}>
            SignUp
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;