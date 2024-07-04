import React, { useState } from 'react'

export default function LiftStateUp() {

    const [inputvalue, setInputvalue] = useState("")
    return (
        <>
            <InputComp inputvalue={inputvalue} setInputvalue={setInputvalue} />
            <DisplayComp inputvalue={inputvalue} />
        </>
    )
}


const InputComp = ({setInputvalue,inputvalue}) => {


    return (
        <>
            <input type="text" value={inputvalue} placeholder='enter your text'
                onChange={(e) => setInputvalue(e.target.value)}
            />

        </>


    )
}


const DisplayComp = (props) => {
    const { inputvalue } = props;
    return <p>The current input value is:{inputvalue}</p>
}