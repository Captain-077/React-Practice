import React, { useState } from 'react'

function Form() {


    const [data, setdata] = useState("");
    const [text, settext] = useState("");


    // const OnchangeInput = (e) => {
    //     e.preventDefault();
    //     setdata(e.target.value);
    //     console.log(setdata)
    // }

    const HandleClick = (e) => {
        e.preventDefault()
        settext(data);

    }


    return (



        <>
            <form action="">

                <input type="text" onChange={(e) => setdata(e.target.value)} />

                <button onClick={HandleClick}>Print</button>
                <p>{text}</p>


            </form>




        </>
    )
}

export default Form