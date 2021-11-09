import React from "react";

const Form = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.popUp}>
        <label htmlFor="firstName" id="firstName">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={props.change}
          required
        />
        <label htmlFor="lastName" id="lastName">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={props.change}
          required
        />
        <label htmlFor="PhoneNumber" id="PhoneNumber">
          Phone number
        </label>
        <input
          type="text"
          name="PhoneNumber"
          id="PhoneNumber"
          onChange={props.change}
          required
        />
        <label htmlFor="role" id="role">
          Role
        </label>
        <select name="role" id="role" onChange={props.change}>
          <option value="developer">Developer</option>
          <option value="tester">Tester</option>
        </select>
        <label htmlFor="message" id="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          onChange={props.change}
          required
        />
        <br></br>
        <input type="submit" value="SEND"></input>
      </form>
    </div>
  );
};

export default Form;
