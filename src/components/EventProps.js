import React from 'react'

function EventProps(props) {

    const handleClick = (user) => {
      alert(`hey ${user} welcome to the page`)
    }

    const handleHover = () => {
        alert(`hey thanks for hovering me`);

    }

    return (
        <>
            <WelcomeUser onButtonClick={() => handleClick("captain")} onHover = {handleHover} />
        </>
    )

}

export default EventProps


const WelcomeUser = (props) => {

    const { onButtonClick,onHover } = props
    return (

        <>
            <button onClick={onButtonClick} > Click me</button>
            <button  onMouseEnter={onHover}> hover me</button>




        </>
    )






}