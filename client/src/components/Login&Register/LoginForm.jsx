import React from "react";
import { motion } from "framer-motion";

const LoginForm = ({ setForm }) => {
  return (
    <form className="loginform">
      <span>Login to your mini HR dashboard !</span>
      <input placeholder="Email Address" type="email" />
      <input placeholder="Password" type="password" />
      <motion.input
        initial={{ x: 100, opacity: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 0.9 }}
        type="submit"
        value="Login"
      />
      <div className="formgroup">
        <motion.button
          initial={{ x: 150, opacity: 0.5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 0.9 }}
          onClick={() => setForm("signup")}
        >
          Sign up
        </motion.button>
        <span>Forgot password?</span>
      </div>
    </form>
  );
};

export default LoginForm;
