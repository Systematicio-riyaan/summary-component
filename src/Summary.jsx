import React from "react";
import "./App.css";
import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

export default function Summary() {
  return (
    <div className="summary-shower">
      <div className="s-text">
        <h3 className="summary">
          <strong>Summary</strong>
        </h3>
      </div>
      <div className="summary-cont">
        <div className="reaction bar">
          <div className="bar-cont">
            <img src={reaction} alt="Your Reaction" /><strong>Reaction </strong>
            <strong>80</strong>/100
          </div>
        </div>
        <div className="memory bar">
          <div className="bar-cont">
            <img src={memory} alt="Your Reaction" /><strong>Memory </strong>
            <strong>80</strong>/100
          </div>
        </div>
        <div className="verbal bar">
          <div className="bar-cont">
            <img src={verbal} alt="Your Reaction" /><strong>Verbal </strong>
            <strong>80</strong>/100
          </div>
        </div>
        <div className="visual bar">
          <div className="bar-cont">
            <img src={visual} alt="Your Reaction" /><strong>Visual </strong>
            <strong>80</strong>/100
          </div>
        </div>
      </div>
      <div className="cont-btn">
        <button>Continue</button>
      </div>
    </div>
  );
}
