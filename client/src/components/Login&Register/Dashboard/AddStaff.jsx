import React, { useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addStaffSchema } from "./yup";
import axios from "axios";

const AddStaff = () => {

  const [error, setError] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addStaffSchema) });

  const submitForm = async (data) => {
    const userToken = localStorage.getItem("userToken");
    const formBody = new URLSearchParams(data).toString();
    try {
     const res = await axios.post("http://localhost:8000/staff", formBody, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${userToken}`,
        },
      });
      let data = await res.text();
      console.log(data)
    } catch (e) {
      // console.log(e.response.data.message);
      setError(e.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="add_staff_form">
      <div className="form_label">
        <span>New Staff Details</span>
        <span className="error">{error}</span>
        <button>
          <FaTimes />
        </button>
      </div>
      <label className="add_staff_img" htmlFor="add_staff_img">
        <FaCamera />
      </label>
      <input type="file" name="add_staff_img" id="add_staff_img" />
      <div className="add_staff_form_group">
        <input {...register("lastName")} type="text" placeholder="Last Name" />
        <input
          {...register("firstName")}
          type="text"
          placeholder="First Name"
        />
      </div>
      <span className="error">
        {errors.lastName?.message} {errors.firstName?.message}
      </span>
      <div className="add_staff_form_group">
        <input
          {...register("department")}
          type="text"
          placeholder="Department"
        />
        <input {...register("jobTitle")} type="text" placeholder="Job Title" />
      </div>
      <span className="error">
        {errors.jobTitle?.message} {errors.department?.message}
      </span>
      <div className="add_staff_form_group">
        <input {...register("address")} type="text" placeholder="Address" />
        <select {...register("gender")} id="">
          <option disabled value="Gender">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>
      <span className="error">
        {errors.address?.message}
      </span>
      <div className="add_staff_form_group">
        <select {...register("status")} id="">
          <option disabled>
            Employment Status
          </option>
          <option value="fullTime">Full time</option>
          <option value="partTime">Part time</option>
          <option value="contract">Contract</option>
        </select>
        <input {...register("age")} type="text" placeholder="Age" />
      </div>
      <span className="error">{errors.age?.message} </span>
      <div className="add_staff_form_group">
        <input {...register("phone")} type="text" placeholder="Phone Number" />
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
        />
      </div>
      <span className="error">
        {errors.phone?.message} {errors.email?.message}
      </span>
      <input type="submit" value={"Add new staff"} />
    </form>
  );
};

export default AddStaff;
