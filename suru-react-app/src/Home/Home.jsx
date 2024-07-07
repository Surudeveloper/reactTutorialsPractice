import React from "react";
import "./Home.css";
import config from "./includes/config.json";

const Home = () => {
  return (
    <div>
      <h3 className="text-center my-3">Login</h3>
      {config.map(({ label, type }, ind) => {
        return (
          <div key={`label_div_${ind}`} className="row mb-3">
            <div className="col-sm-5 text-end">
              <b>{label}</b>
            </div>
            <div className="col-sm-3">
              <input type={type} className="form-control" />
            </div>
          </div>
        );
      })}
      
      <div className="row">
        <div className="offset-sm-5 col-sm-7">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
