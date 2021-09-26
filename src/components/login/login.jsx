import React from "react";
import "./style.scss";
import axios from "axios";
// import Chefinfo from "../../form/personalinfo";
// import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

export class Login extends React.Component 
{
   constructor(props) {
     super(props)
   
     this.state = {
        email: '',
        password: ''
     }
   }
   
   handleOnChangeEmail = (event) =>{ this.setState({email: event.target.value}) }
   handleOnChangePassword = (event) =>{ this.setState({password: event.target.value}) }

   handleOnSubmit = (event) => {
     event.preventDefault();
     console.log(this.state);

     axios.post("http://localhost:8099", this.state)
     .then(response=> {
          console.log("connected");
     })


   }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
      <div className= "base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
          </div>
          <h2 className="header">Login to your account</h2> <br/>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleOnChangeEmail} placeholder="Enter the email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleOnChangePassword} placeholder="********" id="password" />
            
              
            </div>
          </div>
        </div>
        
          <button type="submit" className="butn-login"> <b> LOGIN </b> </button> <br/>

          {/* <button type="submit" className="butn-login"> <b> LOGIN as USER</b> </button> */}                      

      </div>
      </form>
    );
  }
}

                    