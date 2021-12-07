import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import axios from "axios";
class App extends Component {
  state = {
    inputData:{firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  },
    showPopup: false,
    data:[],
  };
  componentDidMount(){
    axios.get("http://localhost:3001/notes").then((res)=>{
      this.setState({data:res.data})
      console.log(res);
      console.log(res.data);
    });
  }
  textHandler = (event) => {
    this.setState({
      inputData:{...this.state.inputData,[event.target.name]: event.target.value}
      ,
    });
  };
  clickHandler = (e) => {
    e.preventDefault();
    console.log("reached");
    this.setState({
      showPopup: true,
    });
  };
  postHandler=()=>{
    axios.post('http://localhost:3001/notes', 
      this.state.inputData).then((res) => {
      console.log(res);
      this.setState({showPopup:false})
      window.location.reload();
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

  
  style = {
    display: "none",
  };
  render() {
    
    return (
      <div>
        
        <Header />
        <div className="formArea">
        <Form change={this.textHandler} popUp={this.clickHandler} />
        <View {...this.state.inputData} /></div>
        {this.state.showPopup && <Popup {...this.state.inputData} post={this.postHandler}/>}
       {this.state.data.map((note)=>(
        <Notes {...note} key={note.id}/>
       ))}
       
        <Footer />
      </div>
    );
  }
}
export default App;
