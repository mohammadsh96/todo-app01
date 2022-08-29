import './App.css';
import React from 'react';
import ToDo from './component/todo/todo';
import Settings from './context/settings';
import Header from '../src/component/basic/Header/Header'
import Footer from '../src/component/basic/Footer/Footer'

import Auth from './context/auth/auth';
import Login from './context/auth/login';
import LoginContext from './context/auth/contextAuth';
function App() {
  return (
      <>     
       <Header/>
    <div className="App">
      
 <LoginContext>
 
 <Login />


 <Auth>
   <div>Any valid user can see this</div>
 </Auth>

 <Auth capability="create">
   <div>Users with create access can see this</div>
      <Settings>
         <ToDo />
      </Settings>
 </Auth>

 <Auth capability="update">
   <div>Users with update access can see this</div>
 </Auth>

 <Auth capability="delete">
   <div>Users with delete access can see this</div>
 </Auth>

</LoginContext>
    </div>
<Footer/>
    </>
  );
}

export default App;
