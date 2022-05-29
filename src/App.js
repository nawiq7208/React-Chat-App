import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Registrasi from "./pages/registrasi";
import LupaPassword from "./pages/lupa-password";
import Landing from "./pages/landing";
import NotFound from "./pages/404";
import Private from "./pages/private";
import PrivateRoute from "./components/PrivateRoute";
import FirebaseProvider from "./components/FirebaseProvider";

export default function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/registrasi" component={Registrasi} />
          <Route path="/login" component={Login} />
          <Route path="/lupa-password" component={LupaPassword} />
          <PrivateRoute path="/chat" component={Private} />
          <PrivateRoute path="/pengaturan" component={Private} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}
