import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import plan from "../plan.svg"

export default function Home() {
  console.log("API IS", API);
  //just to know if API const is kicking in

  return (//the Home page
    <Base title="Hola!Admin" description="Welcome to the XYZ Company">
    <img src={plan} alt="XYZ company"/>
    </Base>
  );
}
