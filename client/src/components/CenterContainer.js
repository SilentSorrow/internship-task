import React from "react";
import { Grid } from "@material-ui/core";

const CenterContainer = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default CenterContainer;
