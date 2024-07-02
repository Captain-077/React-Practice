import React, { useEffect, useState } from 'react';
import Netflix from './Test-destructuring/Netflix';
import Ex1 from './Questions/Ex1';
import EventProps from './components/EventProps';
import EventPropagation from './components/EventPropagation';
import "../src/App.css"
import State from './Hooks/State';
import ExampleComponent from './components/ExampleComponent';
import "./Test-destructuring/Netflix.module.css"
import Ex3 from './Questions/Ex3';


export default function App(props) {

  
    return (
      <>
      <div className="App">
      <Ex3/>

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



