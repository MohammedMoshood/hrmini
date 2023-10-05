import React from "react";
import { motion } from "framer-motion";
const SignupForm = ({ setForm }) => {

  return (
    <form className="loginform">
      <span>Sign up to HRMini</span>
      <div className="formgroup">
        <input placeholder="Last Name" type="email" />
        <input placeholder="First Name" type="text" />
      </div>
      <input placeholder="Email Address" type="email" />
      <input placeholder="Address" type="text" />
      <input placeholder="Password" type="password" />
      <input placeholder="Confirm password" type="password" />
      <motion.input
        initial={{ x: 100, opacity: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 0.9 }}
        type="submit"
        value="Signup"
        onClick={() => setForm("signupsuccess")}
      />
      <div className="formgroup">
        <motion.button
          initial={{ x: 150, opacity: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 0.9 }}
          onClick={() => setForm("login")}
          style={{ width: "100%" }}
        >
          Login
        </motion.button>
      </div>
    </form>
  );
};

export default SignupForm;
