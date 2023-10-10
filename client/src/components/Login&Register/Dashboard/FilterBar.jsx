import React from 'react'

const FilterBar = () => {
  return (
    <div className="filters-container">
        <div
          style={{ background: "#263238", color: "white", cursor: "default" }}
          className="filters-label"
        >
          Filters
        </div>
        <select name="Department" id="" className="filters-label">
          <option value="all">Department</option>
        </select>
        <select name="" id="" className="filters-label">
          <option value="all">Job Title</option>
        </select>
        <select name="" id="" className="filters-label">
          <option value="all">Employment status</option>
        </select>
        <select name="" id="" className="filters-label">
          <option value="all">Gender</option>
        </select>
        <select name="" id="" className="filters-label">
          <option value="all">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
  )
}

export default FilterBar