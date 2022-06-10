import React from "react";
import Button from "@material-ui/core/Button/Button";
import { auth } from "../../../components/FirebaseProvider";

export default function Chat() {
  return (
    <>
      <h1>Halaman Chat</h1>
      <Button
        variant="contained"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </Button>
    </>
  );
}
