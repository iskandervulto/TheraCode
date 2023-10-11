import React from "react";
import useAuth from "../Contexts/AuthContext.js";

const LoginForm = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({
      username: "Iskander",
    });
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return (
    <>
      <span>User is currently: {isLoggedIn ? "Logged-In" : "Logged Out"}</span>
      {isLoggedIn ? <span>User Name: {authUser.username} </span> : null}
      <br />
      {isLoggedIn ? (
        <button
          onClick={(e) => {
            logOut(e);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={(e) => {
            logIn(e);
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default LoginForm;
