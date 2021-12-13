const View = ({firstName,lastName,phoneNumber,role,message}) => {
  return (
    <div className="view">
     {/*  <h1>This is your input:</h1> */}
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
    </div>
  );
};

export default View;
