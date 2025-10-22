import { useEffect, useState, createContext} from "react";



export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user"))||null)
    const updateUser=(data)=>{
        setCurrentUser(data);
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))

    },[currentUser])
    const value={
        currentUser,
        updateUser
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}