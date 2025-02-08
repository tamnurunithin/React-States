import "./styles.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [heading, setHeading] = useState("");
  const [emailDisplay, setEmailDisplay] = useState("");

  function handleFirstNameChange(event) {
    setName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit() {
    setHeading(`${name} ${lastName}`);
    setEmailDisplay(email);
  }

  return (
    <div className="container">
      <h1 className="heading">Hello {heading}</h1>
      <input
        className="input-field"
        onChange={handleFirstNameChange}
        value={name}
        type="text"
        placeholder="Enter First Name"
      />
      <input
        className="input-field"
        onChange={handleLastNameChange}
        value={lastName}
        type="text"
        placeholder="Enter Last Name"
      />
      <input
        className="input-field"
        onChange={handleEmailChange}
        value={email}
        type="text"
        placeholder="Enter Email"
      />
      {emailDisplay && (
        <p className="email-display">Your email: {emailDisplay}</p>
      )}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
