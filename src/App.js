import './App.css';
import React from 'react';
import ToDo from './component/todo/todo';
import Settings from './context/settings';
import Header from '../src/component/basic/Header/Header'
import Footer from '../src/component/basic/Footer/Footer'

import Auth from './context/auth/auth';
import Login from './context/auth/login';
import LoginContext from './context/auth/contextAuth';
function App(props) {
  return (
      <>     
       <Header/>
    <div className="App">
      
 <LoginContext>
 
 <Login />

 <Auth actions="read">
                <div>
                    <h4>
                        for testing purposes  ,regular user [read capability ] <br></br> can't do anything in the website.
                        <br></br> <span className="warn">login with the administrator ...    shihab  : 123 </span>
                    </h4>
                </div>
            </Auth>
 

 <Auth actions="create">
   <div>Users with create access can see this</div>
      <Settings>
         <ToDo />
      </Settings>
 </Auth>

 <Auth actions="update">
   <div>Users with update access can see this</div>
 </Auth>

 <Auth actions="delete">
   <div>Users with delete access can see this</div>
 </Auth>

</LoginContext>
    </div>
<Footer/>
    </>
  );
}

export default App;
