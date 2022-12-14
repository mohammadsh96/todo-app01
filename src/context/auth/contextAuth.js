import React, { useState, useEffect } from "react";
import superagent from 'superagent';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import axios from 'axios';
export const LoginContext = React.createContext();
const API = `https://hiservice.herokuapp.com`
export default function LoginProvider(props) {

    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState({
        username: cookie.load('username') || "",
        actions: cookie.load('actions') || []
    });

    useEffect(() => {
        const tokenFromCookies = cookie.load('token');
        if (tokenFromCookies) {
            setLoginStatus(true);
            setUser(user);
        } else {
            setLoginStatus(false);
            setUser({})
        }
    }, []);

    const SignUpFunction =async (username, password) => {
      try {
        console.log("hello from sign up : ");
          // const response = await superagent.post(`${API}/users/signup`).set( ` ${base64.decode(`${username}:${password}`)}`);
          // console.log('body >>> ', response);
         
         const userData = { username:`${username}`, password:`${password}`}
          // validateMyUser(response.body);
        axios.post('https://hiservice.herokuapp.com/users/signup' , userData)
       
.then(console.log(userData) ,alert("try to login now"))
      } catch (err) {
alert(err)
      }
  }
    const loginFunction = async (username, password) => {
        try {
            const response = await superagent.post(`${API}/users/login`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
            console.log('body >>> ', response.body);
            validateMyUser(response.body);
        } catch (err) {

        }
    }
    const logoutFunction = () => {
        setLoginStatus(false);
        setUser({});
        cookie.remove('token');
        cookie.remove('actions');
        cookie.remove('username');
    }
    const validateMyUser = (user) => {
        if (user.token) {
            const userFromToken = jwt.decode(user.token);
            console.log('username >>>> ', userFromToken);
            setLoginStatus(true);
            setUser(user);
            cookie.save('token', user.token);
            cookie.save('username', user.username);

            // const actionsCookie = JSON.stringify(user.actions);
            cookie.save('actions', user.actions)
        } else {
            setLoginStatus(false);
            setUser({});
        }
    }
    //read
    const can = (action) => {
        // console.log('user.actions >>>> ', user.actions)
        // if (user.actions.includes(action)) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
        return user?.actions?.includes(action);
    }
    const state = {
        loginStatus: loginStatus,
        SignUpFunction:SignUpFunction,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        user: user,
        canDo: can
    }
    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}
