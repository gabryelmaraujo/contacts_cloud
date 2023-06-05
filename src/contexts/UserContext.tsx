import React, { createContext, useState } from "react";
import instance from "../services/api";
import { iUser, iUserEdit } from "../@types/user";

interface IUserProviderValues{
    loginUser: (data: iUser) => void;
    createUser: (data: iUser) => void;
    editUser: (data: iUserEdit, id:number|undefined) => void;
    signed: boolean;
    editUserModal: boolean;
    setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
    loggedUser: iUser | undefined;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
}

export const UserContext = createContext({} as IUserProviderValues);

interface IUserProviderProps{
    children: React.ReactNode
}

export const UserProvider = ({children}: IUserProviderProps) => {

    const [editUserModal, setEditUserModal] = useState(false);
    const [userIdToEdit, setUserIdToEdit] = useState(0);
    const [loggedUser, setLoggedUser ] = useState<iUser>()

    const createUser = async (data: iUser) => {
        try{
            
            const response = await instance.post("users/register/", data)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const editUser = async (data: iUserEdit, id: number|undefined) => {
        try{
            
            const response = await instance.patch(`users/${id}/`, data)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const loginUser = async (data: iUser) => {
        try{
            setLoggedUser(data)
            // const response = await instance.post("users/login/", data)
            // console.log(response)

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
            editUser,
            editUserModal,
            setEditUserModal,
            loggedUser,
            setLoggedUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}