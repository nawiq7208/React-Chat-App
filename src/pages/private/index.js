import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "../pengaturan";
import Chat from "./chat";

export default function Private() {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/pengaturan" component={Pengaturan} />
    </Switch>
  );
}
