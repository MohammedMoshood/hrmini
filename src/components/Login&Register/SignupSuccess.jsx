import React from "react";
import { motion } from "framer-motion";
const SignupSuccess = () => {
  return (
    <form className="loginform">
      <span>Signup <span style={{color:"#09b835"}}>successful!</span> Login to your mini HR dashboard !</span>
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
        <span>Forgot password?</span>
      </div>
    </form>
  );
};

export default SignupSuccess;
