import React, { useState } from "react";
import useStyles from "./styles";
import logo from "../../images/logo.png";
import {
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Typography,
  Switch
} from "@material-ui/core";
import isEmail from "validator/lib/isEmail";
import { auth, firestore, FieldValue } from "../../components/FirebaseProvider";

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
    if (!form.password) {
      newErrors.password = "password wajib di isi";
    }
    if (!form.ulangi_password) {
      newErrors.ulangi_password = "ulangi password wajib di isi";
    } else if (form.ulangi_password !== form.password) {
      newErrors.ulangi_password = "ulangi password tidak sama dengan password";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const findErrors = validate();

    console.log(Object.values(findErrors));
    if (Object.values(findErrors).some((message) => message !== "")) {
      setError(findErrors);
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          form.email,
          form.password
        );

        await firestore.doc(`/profiles/${user.uid}`).set({
          nama: form.nama,
          createdAt: FieldValue.serverTimestamp()
        });
      } catch (e) {
        let newError = {};

        switch (e.code) {
          case "auth/email-already-in-use":
            newError.email = "Email sudah terdaftar";
            break;
          case "auth/invalid-email":
            newError.email = "Email tidak valid";
            break;
          case "auth/weak-password":
            newError.email = "Password lemah";
            break;
          case "auth/operation-not-allowed":
            newError.email = "Metode Email dan Password tidak didukung";
            break;
          default:
            newError.email = "Terjadi kesalahan silahkan dicoba lagi";
            break;
        }

        setError(newError);
      }
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
                label="Email"
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
                label="Password"
                autoComplete="new-password"
                margin="normal"
                fullWidth
                required
                variant="outlined"
                value={form.password}
                onChange={handleChange}
                error={error.password ? true : false}
                helperText={error.password}
              />
              <TextField
                id="ulangi_password"
                type="password"
                name="ulangi_password"
                label="Ulangi Password"
                autoComplete="new-password"
                margin="normal"
                fullWidth
                required
                variant="outlined"
                value={form.ulangi_password}
                onChange={handleChange}
                error={error.ulangi_password ? true : false}
                helperText={error.ulangi_password}
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
