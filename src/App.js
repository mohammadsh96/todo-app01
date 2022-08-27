import './App.css';
import React from 'react';
import ToDo from './component/todo/todo';
import Settings from './context/settings';
import Header from '../src/component/basic/Header/Header'
import Footer from '../src/component/basic/Footer/Footer'

function App() {
  return (
      <>     
       <Header/>
    <div className="App">
      <Settings>
         <ToDo />
      </Settings>
    </div>
<Footer/>
    </>

  );
}

export default App;
