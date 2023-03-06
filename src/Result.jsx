import React from "react";
import "./App.css";

export default function Result() {
  return (
      <div className="result-shower">
        <h3 className="result">Your Result</h3>
        <div className="result-per">
            <div className="r-per">
          <h1>76</h1>
            </div>
            <div className="h-per">
          <p>of 100</p>
            </div>
        </div>
        <div className="msg-shower">
          <h2 className="msg-i">Great</h2>
          <p className="msg">
            You scored higher than 65% of the people who have taken these tests.
          </p>
          </div>
        </div>  
  );
}
