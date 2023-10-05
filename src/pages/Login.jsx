import React, { useState } from "react";
import "../styles/Loginandregister.css";
import LoginForm from "../components/Login&Register/LoginForm";
import Column1 from "../components/Login&Register/Column1";
import SignupForm from "../components/Login&Register/SignupForm";
import SignupSuccess from "../components/Login&Register/SignupSuccess";
// import { motion } from "framer-motion";
const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  return (
    <>
      <div className="login_page">
        <Column1 />
        <div className="right_column">
          {activeForm === "signup" ? (
            <SignupForm setForm={setActiveForm} />
          ) : activeForm === "signupsuccess" ? (
            <SignupSuccess />
          ) : (
            <LoginForm setForm={setActiveForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
