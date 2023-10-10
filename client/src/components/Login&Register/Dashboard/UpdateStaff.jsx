import React from "react";
import { FaCamera, FaTimes } from "react-icons/fa";

const UpdateStaff = () => {
  return (
    <form action="" className="add_staff_form">
      <div className="form_label">
        <span>
          Update <b>{"Victor"}'s</b> Details
        </span>
        <button>
          <FaTimes />
        </button>
      </div>
      <label className="add_staff_img" htmlFor="add_staff_img">
        <FaCamera />
      </label>
      <input type="file" name="add_staff_img" id="add_staff_img" />
      <div className="add_staff_form_group">
        <input type="text" placeholder="Last Name" value={"Victor"} />
        <input type="text" placeholder="First Name" value={"Adigun"} />
      </div>
      <div className="add_staff_form_group">
        <input type="text" placeholder="Department" value={"Kitchen"} />
        <input type="text" placeholder="Job Title" value={"Chef"} />
      </div>
      <div className="add_staff_form_group">
        <input
          type="text"
          placeholder="Address"
          value={"no 134 Mobolaji Johnson station,  Alagomeji"}
        />
        <select name="" id="" value={"Male"}>
          <option disabled value="Gender">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="add_staff_form_group">
        <select name="" id="" value={"Full time"}>
          <option disabled value="Employment status">
            Employment Status
          </option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
        </select>
        <input type="text" placeholder="Age" value={"21"} />
      </div>
      <div className="add_staff_form_group">
        <input type="text" placeholder="Phone Number" value={"07045678912"} />
        <input
          type="email"
          placeholder="Email Address"
          value={"Epondeji@victor.com"}
        />
      </div>
      <input type="submit" value={"Update"} />
    </form>
  );
};

export default UpdateStaff;
