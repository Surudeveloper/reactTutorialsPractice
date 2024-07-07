import React from "react";
import "./Contact.css";
import Grid from "@mui/material/Grid";
import config from "./includes/config";

const Contact = () => {
  return (
    <>
      {
      config.map(({ label, type }, ind) => {
        return (
          <Grid container key={`grid_${ind}`}>
            <Grid item sm={5}>
              <b>{label}</b>
            </Grid>
            <Grid item sm={3}>
              <input type={type} />
            </Grid>
          </Grid>
        );
      })
      }
    </>
  );
};

export default Contact;
