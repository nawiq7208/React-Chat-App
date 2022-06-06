import React, { useState } from "react";
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
import isEmail from "validator/lib/isEmail";

export default function Registrasi() {
  const classes = useStyles();

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    ulangi_password: ""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.nama) {
      newErrors.nama = "Nama wajib di isi";
    }
    if (!form.email) {
      newErrors.email = "email wajib di isi";
    } else if (!isEmail(form.email)) {
      newErrors.email = "email tidak valid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const findErrors = validate();

    console.log(Object.values(findErrors));
    if (Object.values(findErrors).some((message) => message !== "")) {
      setError(findErrors);
    }
  };

  console.log("error", error);

  return (
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
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                id="nama"
                name="nama"
                label="Nama"
                margin="normal"
                fullWidth
                required
                variant="outlined"
                value={form.nama}
                onChange={handleChange}
                error={error.nama ? true : false}
                helperText={error.nama}
              />
              <TextField
                id="email"
                type="email"
                name="email"
                label="email"
                margin="normal"
                fullWidth
                required
                variant="outlined"
                value={form.email}
                onChange={handleChange}
                error={error.email ? true : false}
                helperText={error.email}
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
                value={form.password}
                onChange={handleChange}
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
                value={form.ulangi_password}
                onChange={handleChange}
              />
              <Grid container className={classes.buttons}>
                <Grid item xs>
                  <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    size="large"
                  >
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
  );
}
