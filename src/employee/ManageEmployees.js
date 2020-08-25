import React, { useState, useEffect } from "react";

import Base from "../core/Base";

import { Link } from "react-router-dom";//react-routing

import { deleteEmployee, updateEmployee } from './helper/apicalls';
import {getAllEmployees} from './helper/apicalls';

export default function ManageEmployees() {
    const [employees, setEmployees] = useState([]);
//state

  const preload = () => {
    getAllEmployees().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEmployees(data);
      }
    });
  };//to load before everything does--with useEffect Hooks

  useEffect(() => {
    preload();
  }, []);

  const deleteThisEmployee = employeeId => {
    deleteEmployee(employeeId).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };//delete a particular employee based on Id passed as param

  return (
    <Base title="Welcome admin" description="Manage employees here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total Employees</h2>

          {employees.map((employee, index) => { //map function to traverse through every employee and display
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{employee.name}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/update/employee/${employee._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisEmployee(employee._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
