import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLD4FW-JUBsZ73mM7nwfK4CGeXw2XpYbhfMg&usqp=CAU"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
