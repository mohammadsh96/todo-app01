import React  from 'react';
import {useState } from 'react'
// import LoginContext from '../../../context/auth/contextAuth'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
// const context =useContext(LoginContext)
  const [user , setUser] =useState({});

const handleLogin =(e)=>{
  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.password.value);
  // console
  let user ={
    username : e.target.username.value,
    password : e.target.password.value,
  }
  setUser(user)
  
if(user.username ==="mohammad"&& user.password==="123"){

  alert("welcome mohammad")
}else{
  alert("you are not allowed to login pls register now")
}

}
console.log(user);

   return(<>
                 

   <Navbar bg="dark" variant="dark">
           <Container>
             <Navbar.Brand href="#home">To DO</Navbar.Brand>
             <Nav className="me-auto">
               {/* <Nav.Link href="#home">Home</Nav.Link>
               <form onSubmit={handleLogin} >
               <input type="text" placeholder="username" name="username"></input>
               <input type="password" placeholder="password" name="password"></input>
               <button className="btn1" type="submit"  >Login</button>
             
              </form> */}
              <h5 id="head"> not a user !? signup here </h5>
              <form  >
               <input type="text" placeholder="not working yet" name="username"></input>
               <input type="password" placeholder="not working yet" name="password"></input>
              <button className="btn1" type ="submit" href="register" >signup</button>
             
              </form>

             </Nav>
           </Container>
         </Navbar>
         
   
   </>)
 



} 

