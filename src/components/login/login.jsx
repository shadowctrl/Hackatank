"use client";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import Notallowed from "../qr/notallowed";

const Login = () => {
  const [user] = useAuthState(auth);
  const google = new GoogleAuthProvider();
  const verifiedMails = [
    "raghavcybe@gmail.com",
    "killerkishore474@gmail.com",
    "random0120003@gmail.com",
    "thelinuxsec@gmail.com",
    "yenshree@gmail.com",
    "prorahul555@gmail.com",
  ];
  const [notVerified, setNotVerified] = useState(false);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, google);
    const email = result.user.email;
    if (!verifiedMails.includes(email)) {
      setNotVerified(true);
      return await handleLogout();
    }
  };
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div className="parent-login">
      {notVerified ? (
        <Notallowed />
      ) : user ? (
        <div>
          <h1 className="title-login">
            Logged In Successfully as {user?.email}
          </h1>
          <h3 className="signout-login" onClick={handleLogout}>
            Click here to sign out
          </h3>
        </div>
      ) : (
        <h1 className="title-login" onClick={handleLogin}>
          <FcGoogle />
          Login With Google
        </h1>
      )}
    </div>
  );
};

export default Login;
