import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {Alert} from "react-bootstrap";


//admin dashboard divided to two for suppose---left for navigation and right to welcome admin
const AdminDashBoard = () => {

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/create/employee" className="nav-link text-success">
          Add An Employee

            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/manage" className="nav-link text-success">
          Manage Employees
            </Link>
          </li>
          
          
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin!!</h4>
        <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Admin!! You are free to make changes to the Employees of XYZ company
  </p>
  <hr />
  <p className="mb-0">
    Have a smile on your face ;),Thank You.
  </p>
</Alert>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your employees here"
      className="container bg-success p-4"
    >
      <div className="row" >
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
