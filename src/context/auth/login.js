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
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <>
        <When condition={this.context.loggedIn}>
          <button className="btn1" onClick={this.context.logout}>Log Out</button>
        </When>

        <When condition={!this.context.loggedIn}>
 <div>you have to login first !</div>

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
            <a href="#">not a user ? sign up </a>
        
          </form>
          

        </When>
      </>
    );
  }
}

export default Login;