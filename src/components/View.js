const View = (props) => {
  return (
    <div className="view">
      <h1>This is your input:</h1>
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
    </div>
  );
};

export default View;
