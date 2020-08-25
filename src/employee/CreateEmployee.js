import React, {useState,useEffect} from 'react'
import Base from '../core/Base'
import { Link } from "react-router-dom";
import {createEmployee} from "./helper/apicalls";

export default function CreateEmployee() {
    
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
       }); //state variables
    
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
    
      const preload = () => {
        setValues({ ...values, formData: new FormData() });

      };//to load before everything else does---useEffect is used
    
      useEffect(() => {
        preload();
      }, []);
    
      //on Submit button click this event handled
      const onSubmit = event => {
        event.preventDefault();
        console.log(values);
        setValues({ ...values, error: "", loading: true });
        
        console.log(formData);
        const { name, designation, email, phoneNo, address } = values;
         
        createEmployee({ name, designation, email, phoneNo, address }).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({
              ...values,
              name: "",
              designation: "",
              email:"",
              phoneNo:"",
              address:"",
              photo: "",
              loading: false,
              createdEmployee: data.name
            });
          }
        });
      };
    
      //input from each field recorded
      const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        console.log(values);
        setValues({ ...values, [name]: value });
      };
    
      //displays status of creating an employee 
      const successMessage = () => (
        <div
          className="alert alert-success mt-3"
          style={{ display: createdEmployee ? "" : "none" }}
        >
          <h4>{createdEmployee} created successfully</h4>
        </div>
      );
    
      //the fields to enter
      const createEmployeeForm = () => (
        <form >
          <span>Fill here</span>
          <br/>
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
              name="designation"
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
              placeholder="Email"
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("phoneNo")}
              name="phoneNo"
              className="form-control"
              placeholder="phone-no:"
              value={phoneNo}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("address")}
              name="address"
              className="form-control"
              placeholder="address"
              value={address}
            />
          </div>
          
          
          <button
            type="submit"
            onClick={onSubmit}
            className="btn btn-outline-success mb-3"
          >
            Create Employee
          </button>
        </form>
      );
    
      return (
        <Base
          title="Add a employee here!"
          description="Welcome to employee creation section"
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
    

