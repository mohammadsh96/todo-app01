import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './contextAuth';

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: ''  };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("e.target value >>> ",e.target.value)
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.loginFunction(this.state.username, this.state.password);
  };
handleSubmitUp = e =>{
e.preventDefault();
  this.context.SignUpFunction(this.state.username, this.state.password);
}
  render() {
    return (
      <>
      
     
          
        <When condition={this.context.loginStatus}>
          <button className="btn1" onClick={this.context.logoutFunction}>Log Out</button>
        </When>

        <When condition={!this.context.loginStatus}>
 {/* <div>you have to login first !</div> */}
<div>sign up  then try to login directly and check the console to make sure the sign up works fine </div>
 <form onSubmit={this.handleSubmitUp}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button className="btn1" type="submit" value="signup">SignUp</button>
            {/* <a href="#">not a user ? sign up </a> */}
        
          </form>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button className="btn1" type="submit" value="Login">Login</button>
            {/* <a href="#">not a user ? sign up </a> */}
        
          </form>
          

        </When>
        
      </>
    );
  }
}

export default Login;