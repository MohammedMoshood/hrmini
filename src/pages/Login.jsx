import React from "react";
import "../styles/Login.css"
import LoginForm from "../components/LoginForm";
// import { motion } from "framer-motion";
const Login = () => {
  return <>
    <div className="login_page">
    <div className="login_page_left">
      <div>
        <h1>HR<span style={{fontFamily:"Passero One" , fontSize:"110px", color:"#263238"}}>M</span>ini</h1>
        <span>Staff organization for small businesses</span>
      </div>
    </div>
    <div className="login_page_right">
      <LoginForm/>
    </div>
    </div>
</>;
};

export default Login;