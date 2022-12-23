import { createContext, useReducer , useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";




export const userContext = createContext()

const finalState = (state, value) => {
    switch (value.type) {
        case "LOGIN":
            return {user: value.payload, error: null, isLoading: null, isComplete: true}
        case "LOGOUT":
            return {user: null, error: null, isLoading: null, isComplete: true}
        case "Error":
            return {user: null, error: value.payload, isLoading: null, isComplete: true}
        case "SIGNIN":
                return {user: value.payload, error: null, isLoading: null, isComplete: true}
        default:
            return state;
    }

}

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    isComplete: false

}

export const UserProvider = ({children}) => {


    const [state, dispatch] = useReducer(finalState, initialState)


    useEffect(() => {
        const response = onAuthStateChanged(auth, (user) => {
            dispatch({type: "LOGIN", payload: user})

        })
        return response

    }, [])


return (
    <userContext.Provider value={{...state, dispatch}}>{children}</userContext.Provider>
)
}