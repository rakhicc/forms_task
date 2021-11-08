import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    role: "",
    message: "",
  };
  textHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Form change={this.textHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          PhoneNumber={this.state.PhoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}
export default App;
