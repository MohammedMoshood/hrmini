import React, { useState } from "react";
import axios from "axios";
import { signinSchema } from "./Dashboard/yup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setForm }) => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });
  const submitForm = async (data) => {
    const formBody = new URLSearchParams(data).toString();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/signin",
        formBody,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(res);
      localStorage.setItem("userToken", res.data?.accessToken);
      setError("");
      navigate("/dashboard");
    } catch (e) {
      console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} className="loginform">
      <span>Login to your mini HR dashboard !</span>
      <span className="error">{error}</span>

      <input {...register("email")} placeholder="Email Address" type="email" />
      <span className="error">{errors.email?.message} </span>
      <input {...register("password")} placeholder="Password" type="password" />
      <span className="error">{errors.password?.message} </span>

      <motion.input
        initial={{ x: 100, opacity: 0.5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 0.9 }}
        type="submit"
        value="Login"
        // onClick={() => navigate("/dashboard")}
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
