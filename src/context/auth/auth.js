import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './contextAuth';

class Auth extends React.Component {
 

  static contextType = LoginContext;

  render() {

    const isLoggedIn = this.context.loginStatus;
    const canDo = this.props.actions ? this.context.canDo(this.props.actions) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    );
  }
}

export default Auth;
