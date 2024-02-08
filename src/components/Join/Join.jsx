import React, { useRef, useState } from "react";
import "./Join.css";
import { sendCustomEmail } from "../../email.jsx";

const Join = () => {
  const handleSendEmail = () => {
    sendCustomEmail({
      from_name: inputValue,
      message: "Thanks for Joining",
    });
  };
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <div className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address"
            onChange={handleInputChange}
          />
          <button onClick={handleSendEmail} className="btn btn-j">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
