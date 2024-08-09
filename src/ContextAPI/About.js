import React, { useContext } from "react"
import { BioContext } from "./Index"

export const About = () => {
    const name = useContext(BioContext)

    return <p>This is about User {name}</p>

}