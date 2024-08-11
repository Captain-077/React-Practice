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
import SideHook from './UseEffect/SideHook';
import { UseHookChallenge } from './UseEffect/UseHookChallenge';
import { UseCleanup } from "./UseEffect/UseCleanup"
import { UseRef } from './Hooks/UseRef';
import { BioProvider } from './ContextAPI/Index';
import { Home } from './ContextAPI/Home';
import { About } from './ContextAPI/About';
import { HowNotToFetchApi } from './UseEffect/HowNotToFetchApi';
import { RightFetchAPI } from './UseEffect/RightFetchAPI';
import { AsyncFetch } from './UseEffect/AsyncFetch';

export default function App(props) {


  return (
    <>
      <div className="App">
        <AsyncFetch />


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



