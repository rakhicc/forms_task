import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    role: "",
    message: "",
    showPopup: false,
  };
  textHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  clickHandler = (e) => {
    e.preventDefault();
    console.log("reached");
    this.setState({
      showPopup: true,
    });
  };
  style = {
    display: "none",
  };
  render() {
    const props = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      PhoneNumber: this.state.PhoneNumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <Header />
        <Form change={this.textHandler} popUp={this.clickHandler} />
        <View {...props} />
        {this.state.showPopup && <Popup {...props} />}
        <Footer />
      </div>
    );
  }
}
export default App;
