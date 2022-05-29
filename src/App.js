import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Registrasi from "./pages/registrasi";
import LupaPassword from "./pages/lupa-password";
import Landing from "./pages/landing";
import NotFound from "./pages/404";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/login" component={Login} />
        <Route path="/lupa-password" component={LupaPassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
