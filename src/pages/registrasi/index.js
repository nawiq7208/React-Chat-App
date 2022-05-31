import React from "react";
import useStyles from "./styles";
import logo from "../../images/logo.png";
import {
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Typography
} from "@material-ui/core";

export default function Registrasi() {
  const classes = useStyles();
  return (
    <>
      {/* <h1 className={classes.blue}>Halaman Registrasi</h1>
      <TextField variant="outlined" />
      <Button variant="contained" color="primary">
        Registrasi
      </Button> */}
      <div className={classes.daftarBlock}>
        <div className={classes.daftarBox}>
          <div className={classes.logoBox}>
            <img src={logo} alt="logo" />
          </div>
          <Container maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1" className={classes.title}>
                Buat Akun Baru
              </Typography>
              <form>
                <TextField
                  id="nama"
                  name="nama"
                  label="nama"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  label="password"
                  autoComplete="new-password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="ulangi_password"
                  type="password"
                  name="ulangi_password"
                  label="ulangi password"
                  autoComplete="new-password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <Grid container className={classes.buttons}>
                  <Grid item xs>
                    <Button color="primary" variant="contained" size="large">
                      Daftar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large">
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
}
