import React, { useState } from "react";
import { motion } from "framer-motion";
const SignupForm = ({ setForm }) => {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  return (
    <form className="loginform">
      <span>Sign up to HRMini</span>
      <div className="formgroup">
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          type="email"
        />
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          type="text"
        />
      </div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        type="email"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <input
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="Confirm password"
        type="password"
      />
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
