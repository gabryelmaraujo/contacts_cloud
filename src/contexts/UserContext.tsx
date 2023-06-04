import React, { createContext } from "react";
import instance from "../services/api";

interface IUserProviderValues{
    loginUser: (data: object) => void;
    createUser: (data: object) => void;
    signed: boolean;
}

export const UserContext = createContext({} as IUserProviderValues);

interface IUserProviderProps{
    children: React.ReactNode
}

export const UserProvider = ({children}: IUserProviderProps) => {

    const createUser = async (data: object) => {
        try{
            
            const response = await instance.post("users/register/", data)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const loginUser = async (data: object) => {
        try{
            
            const response = await instance.post("users/login/", data)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    return(
        <UserContext.Provider 
        value={{
            signed: false,
            loginUser,
            createUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}