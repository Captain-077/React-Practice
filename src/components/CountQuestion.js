import React from 'react'
import React, { useEffect, useState } from 'react';

let obj = { initialCount: 10 }

function IncObjInititalCountBy1() {
  obj.initialCount += 1;
  return obj.initialCount

}

function CountQuestion() {

    useEffect(() => {
        const timer = setTimeout(() => {
          console.log(countObj.initialCount);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []); 
    
        const [countObj, setCountObj] = useState(obj)
        console.log(countObj.initialCount)
  return (
    <>
    <button onClick={() => IncObjInititalCountBy1()}>Increase By 1</button>

    <p>{countObj.initialCount}</p>


  </>
  )
}

export default CountQuestion