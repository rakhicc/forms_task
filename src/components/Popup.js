import React from "react";

const closeHandler = () => {
  window.location.reload();
};
const Popup = ({firstName,lastName,phoneNumber,role,message,post}) => {
  return (
    <div className="overlay">
      <div className="popUpDiv">
        <h1>Your note:</h1>
        <p>
          First name:<span className="spanCanvea"> {firstName}</span>
        </p>
        <p>
          Last name:<span className="spanCanvea"> {lastName}</span>
        </p>
        <p>
          Phone number:<span className="spanCanvea"> {phoneNumber}</span>
        </p>
        <p>
          Role: <span className="spanCanvea">{role}</span>
        </p>
        <p>
          Message:<span className="spanCanvea"> {message}</span>
        </p>
        <div className="buttons">
          <button onClick={post} className="primary" >
            Yes, I am sure
          </button>
          <button  className="secondary" onClick={closeHandler}>
            No, don't want to post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
