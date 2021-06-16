import React, { useState } from 'react';
import apiGateway from "../apiGateway";
import Menu from "../Menu";
import LoginForm from "./LoginForm";

export default function Login(props) {
  
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function getHeader(){
    return {
      headers: { Authorization: "Bearer ".concat(localStorage.getItem("@token")) }
    };
  }

  function login (e) {
      e.preventDefault();
      console.log(username);
      console.log(password);
      console.log("aqui");
      apiGateway.post("/authenticate", {
        username: username,
        password: password
      }).then(response => {
        console.log(response.data);
        localStorage.setItem("@token", response.data.token);
        setRedirect(true);
      });
  } 

  return (
      <div>
          {redirect === false && <LoginForm inputUsername={setUsername} inputPassword={setPassword} submit={login}/> }
          {redirect === true && <Menu getHeader={getHeader}/> }
      </div>
  );
}
