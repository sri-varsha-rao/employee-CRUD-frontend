import React from 'react';
import {Alert} from "react-bootstrap";
import stepup from "../stepup.svg";


//about this project
export default function About() {
    return (
        <div>
            <h1>About this Project</h1>
            <div className="container" style={{alignItems:"center",paddingTop:100}}>
            <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              This project is a pre-assessment task given by access.ai.Made using MERN STACK.
              FRONTEND and BACKEND up and Running.API s tested using POSTMAN.
            </p>
            <hr />
            <p className="mb-0">
              THANK YOU ;)
            </p>
          </Alert>
          <img src={stepup} alt="made with MERN" style={{height:800,width:400}}/>
          </div>
        </div>
    )
}
