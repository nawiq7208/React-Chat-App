import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const FirebaseContext = React.createContext();

export function useFirebase() {
  return React.useContext(FirebaseContext);
}

export default function FirebaseProvider(props) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <h1>Loading Auth State...</h1>;
  }
  return (
    <FirebaseContext.Provider
      value={{
        user
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
}
