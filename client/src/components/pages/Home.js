import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../Navbar";
import PetList from "../PetList";

const HomePage = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Navbar />
            <PetList />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
