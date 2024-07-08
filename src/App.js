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
import Tailwind from './Tailwind/Tailwind';
import DerivedState from './Hooks/DerivedState';
import LiftStateUp from './Hooks/LiftStateUp';
import DropDown from './Questions/CountryDropDown';
import CheckList from './Questions/CheckboxDeleteBtn';
import Main from './Questions/checboxFixed/Main';
import ApiFetch from './Questions/ApiFetch';
import Todo from './ACP test/Todo';


export default function App(props) {

  
    return (
      <>
      <div className="App">
      <Todo/>

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



