import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "./chat";
import Chat from "./pengaturan";

export default function Private() {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/pengaturan" component={Pengaturan} />
    </Switch>
  );
}
