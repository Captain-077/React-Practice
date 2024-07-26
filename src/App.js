import React, { useEffect, useState } from 'react';
import "../src/App.css"
import State from './Hooks/State';
import ExampleComponent from './components/ExampleComponent';
import "./Test-destructuring/Netflix.module.css"

import LoginForm from './Forms_React/LoginForm';


export default function App(props) {

  
    return (
      <>
      <div className="App">
      <LoginForm/>

      </div>
      


      </>
    );
  }


  export const Sibling = (props) => {

    console.log("Sibling component rendered");
      return (
  
          <>
              <h1>Sibling component</h1>
          </>
      )
  
  }



