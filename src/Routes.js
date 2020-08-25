import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";//for the react-routing

//components
import Home from "./core/Home";
import AdminDashBoard from "./employee/AdminDashboard";
import CreateEmployee from "./employee/CreateEmployee";
import UpdateEmployee from "./employee/UpdateEmployee";
import About from "./employee/About";
import ManageEmployees from "./employee/ManageEmployees";


//routes and each component to appear
const Routes = () => {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin/dashboard" exact component={AdminDashBoard} />
        <Route path="/create/employee" exact component={CreateEmployee} />
        <Route path="/update/employee/:employeeId" exact component={UpdateEmployee} />
        <Route path="/manage" exact component={ManageEmployees} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
