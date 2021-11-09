import React from "react";

const closeHandler = () => {
  window.location.reload();
};
const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popUpDiv">
        <h1>Your note:</h1>
        <p>
          First name:<span className="spanCanvea"> {props.firstName}</span>
        </p>
        <p>
          Last name:<span className="spanCanvea"> {props.lastName}</span>
        </p>
        <p>
          Phone number:<span className="spanCanvea"> {props.PhoneNumber}</span>
        </p>
        <p>
          Role: <span className="spanCanvea">{props.role}</span>
        </p>
        <p>
          Message:<span className="spanCanvea"> {props.message}</span>
        </p>
        <div className="buttons">
          <button type="submit" className="primary" onClick={closeHandler}>
            Yes, I am sure
          </button>
          <button type="submit" className="secondary" onClick={closeHandler}>
            No, don't want to post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
