import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  daftarBlock: {
    width: "100%",
    height: 320,
    borderRadius: "0 0 100% 100%",
    position: "relative"
  },
  daftarBox: {
    position: "relative",
    height: "100%",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    flexFlow: "column nowrap"
  },
  logoBox: {
    width: 282,
    height: 69,
    margin: "30px auto 20px"
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: "none"
  }
}));
