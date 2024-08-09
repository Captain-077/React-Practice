import React, { createContext } from "react"

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
    const name = "thapa";

    return <BioContext.Provider value={name}>
        {children}
    </BioContext.Provider>
}