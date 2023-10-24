import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { signupSchema } from "./Dashboard/yup";
import { yupResolver } from "@hookform/resolvers/yup"; //allows us to make a connection between react-hook-form and yup which are two different libraries
// const User_Regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const Pwd_Regex = /^(?=.*[a-z]) (?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// what is a schema ? a schema defines how data is organized within a database

const SignupForm = ({ setForm }) => {
  const [error, setError] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const submitForm = async (data) => {
    const formBody = new URLSearchParams(data).toString();

    try {
      await axios.post("http://localhost:8000/auth/signup", formBody, {
        headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
      });

      
    } catch (e) {
      // console.log(e.response.data.message);
      setError(e.response.data.message);
      error == [] && setForm("dashboard");
    }
  };

  return (
    <form className="registerform" onSubmit={handleSubmit(submitForm)}>
      <span>Sign up to HRMini</span>
      <input {...register("companyName")} placeholder="Company Name" type="text" />
      <span className="error">{errors.companyName?.message} </span>
      <input {...register("email")} placeholder="Email Address" type="email" />
      <span className="error">{errors.email?.message} </span>

      <input {...register("address")} placeholder="Address" type="text" />
      <span className="error">{errors.address?.message} </span>

      <input {...register("phone")} placeholder="Phone number" type="text" />
      <span className="error">{errors.phone?.message} </span>

      <input {...register("password")} placeholder="Password" type="password" />
      <span className="error">{errors.password?.message} </span>

      <input {...register("passwordConfirm")} placeholder="Confirm password" type="password" />
      <span className="error">{errors.passwordConfirm && "Passwords should match!"} </span>

      {/* <span className="error" >
        {error.map((data, i) => {
          return (
            <span key={i}>
              {data}
              <br />
            </span>
          );
        })}
      </span> */}
      <motion.input
        initial={{ x: 100, opacity: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 0.9 }}
        type="submit"
        value="Signup"
        // onClick={() => setForm("signupsuccess")}
      />
      <div className="formgroup">
        <motion.button initial={{ x: 150, opacity: 0.5 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} whileHover={{ scale: 0.9 }} onClick={() => setForm("login")} style={{ width: "100%" }}>
          Login
        </motion.button>
      </div>
    </form>
  );
};

export default SignupForm;
