import React from "react";
import { Switch, Route } from "react-router-dom";
import Pengaturan from "../private/pengaturan";
import Chat from "../private/chat";

export default function Private() {
  return (
    <Switch>
      <Route path="/chat" component={Chat} />
      <Route path="/pengaturan" component={Pengaturan} />
    </Switch>
  );
}
