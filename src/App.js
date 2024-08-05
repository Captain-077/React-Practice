import React, { useState } from 'react';
import "../src/App.css"
import State from './Hooks/State';
import ExampleComponent from './components/ExampleComponent';
import "./Test-destructuring/Netflix.module.css"

import LoginForm from './Forms_React/LoginForm';
import ContactForm from './Forms_React/ContactForm';
import Welcome from './Test-destructuring/TestComp';
import { Counter } from './Questions/counter';
import Button from './Questions/buttonStyled';
import SideHook from './Hooks/SideHook';

export default function App(props) {

  
    return (
      <>
      <div className="App">
    <SideHook/>

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



