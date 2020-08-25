
import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";//react-routing
import {
  getEmployee,
  updateEmployee
} from "./helper/apicalls";

//update employee kicks in when update button next to an employee is clicked
const UpdateEmployee = ({ match }) => {

  const [values, setValues] = useState({
    name: "",
    designation: "",
    email: "",
    phoneNo: "",
    address: "",
    photo: "",
    loading: false,
    error: "",
    createdEmployee: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    designation,
    email,
    phoneNo,
    address,
    loading,
    error,
    createdEmployee,
    getaRedirect,
    formData
  } = values;

  const preloadForm = employeeId => {
    getEmployee(employeeId).then(data => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          designation: data.designation,
          email:data.email,
          phoneNo:data.phoneNo,
          address:data.address,
          formData: new FormData()
        });
      }
    });
  };

  
//Hooks
  useEffect(() => {
    preloadForm(match.params.employeeId);
  }, []);

  
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateEmployee(match.params.employeeId,formData).then(
      data => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            designation: "",
            email: "",
            phoneNo: "",
            address: "",
            photo: "",
            loading: false,
            createdEmployee: data.name
          });
        }
      }
    );
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdEmployee ? "" : "none" }}
    >
      <h4>{createdEmployee} updated successfully</h4>
    </div>
  );

  //a form with existing values and able to edit and save them
  const createEmployeeForm = () => (
    <form>
      <span>Fill here</span>
      
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("designation")}
          name="photo"
          className="form-control"
          placeholder="Designation"
          value={designation}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("email")}
          name="email"
          className="form-control"
          placeholder="E-mail"
          value={email}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("phoneNo")}
          name="phoneNo"
          className="form-control"
          placeholder="Phone Number "
          value={phoneNo}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("address")}
          name="address"
          className="form-control"
          placeholder="Address"
          value={address}
        />
      </div>
      

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Employee
      </button>
    </form>
  );

  return (
    <Base
      title="Update an employee here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home 
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createEmployeeForm()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateEmployee;
