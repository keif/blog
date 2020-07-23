import React, { useReducer } from "react"
import Context from "./Context"

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return (
            <Context.Provider value={{ state }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}