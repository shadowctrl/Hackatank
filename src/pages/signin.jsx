import React, { useEffect, useRef } from "react";
import { GoogleButton } from "react-google-button";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import welcomeAnimation from "../assets/welcome.json";
import instagram from "../assets/instagram.json";
import youtube from "../assets/youtube.json";
import link from "../assets/link.json";
import { auth } from "./firebase.js";
import "./signin.css";
import lock from "../assets/lock.json";

const signin = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [user, loading] = useAuthState(auth);

  const handleSignin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };
  const handleSignout = () => {
    signOut(auth);
  };
  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);
  if (loading)
    return (
      <div>
        {
          <Lottie
            animationData={lock}
            style={{
              height: "50%",
              width: "50%",
            }}
          />
        }
      </div>
    );
  return (
    <div className="signin ">
      <div className="card">
        <div className="welcome">
          <Lottie animationData={welcomeAnimation} loop={1} />
        </div>
        <div className="title">Log In</div>
        <div className="card_contents">
          <div className="content" onClick={() => handleSignin()}>
            <FcGoogle size={"2vw"} />
            Sign in with Google
          </div>
        </div>
        <div className="socials">
          <ul>
            <li
              onClick={() =>
                window.open("https://www.instagram.com/srmveccsisb")
              }
            >
              <Lottie
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.play();
                }}
                lottieRef={ref}
                animationData={instagram}
                // autoplay={false}
                loop={3}
                // loop: {false}
                style={{
                  scale: "0.5",
                  cursor: "pointer",
                }}
                renderer="svg"
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              />
            </li>
            {/* <li
              onMouseEnter={() => {
                ref2.current.stop();
                ref2.current.play();
              }}
            >
              <Lottie
                onClick={() =>
                  window.open("https://www.youtube.com/@SRMVECCSIAN")
                }
                lottieRef={ref2}
                animationData={youtube}
                // autoplay={false}
                loop={false}
                // loop: {false}
                style={{ scale: "1", height: "50px", cursor: "pointer" }}
              />
            </li>
            <li
              onMouseEnter={() => {
                ref3.current.stop();
                ref3.current.play();
              }}
            >
              <Lottie
                onClick={() =>
                  window.open("https://www.youtube.com/@SRMVECCSIAN")
                }
                lottieRef={ref3}
                animationData={link}
                // autoplay={false}
                loop={false}
                // loop: {false}
                style={{ scale: "1", height: "50px", cursor: "pointer" }}
              />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default signin;
