import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function Registrasi() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.blue}>Halaman Registrasi</h1>
      <TextField variant="outlined" />
      <Button variant="contained" color="primary">
        Registrasi
      </Button>
    </>
  );
}
