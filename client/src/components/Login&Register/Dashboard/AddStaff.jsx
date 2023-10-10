import React from "react";
import { FaCamera, FaTimes } from "react-icons/fa";

const AddStaff = () => {
  return (
    <form action="" className="add_staff_form">
      <div className="form_label">
        <span>New Staff Details</span>
        <button>
          <FaTimes />
        </button>
      </div>
      <label className="add_staff_img" htmlFor="add_staff_img">
        <FaCamera />
      </label>
      <input type="file" name="add_staff_img" id="add_staff_img" />
      <div className="add_staff_form_group">
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="First Name" />
      </div>
      <div className="add_staff_form_group">
        <input type="text" placeholder="Department" />
        <input type="text" placeholder="Job Title" />
      </div>
      <div className="add_staff_form_group">
        <input type="text" placeholder="Address" />
        <select name="" id="">
          <option disabled value="Gender">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="add_staff_form_group">
        <select name="" id="">
          <option disabled value="Employment status">
            Employment Status
          </option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Contract">Contract</option>
          <option value="Remote">Remote</option>
        </select>
        <input type="text" placeholder="Age" />
      </div>
      <div className="add_staff_form_group">
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
      </div>
      <input type="submit" value={"Add new staff"} />
    </form>
  );
};

export default AddStaff;
