import React, { createContext, useState } from "react";
import instance from "../services/api";
import { iUser, iUserEdit } from "../@types/user";
import { boolean, string } from "yup";

interface IUserProviderValues{
    loginUser: (data: iUser) => void;
    createUser: (data: iUser) => void;
    editUser: (data: iUserEdit, id:number) => void;
    signed: boolean;
    editModal: IEditModal;
    setEditModal: React.Dispatch<React.SetStateAction<IEditModal>>;
    loggedUser: iUser;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUser>>;
}

export const UserContext = createContext({} as IUserProviderValues);

interface IUserProviderProps{
    children: React.ReactNode
}

interface IEditModal {
    open: boolean;
    type: string;
    user_id: number;
}

export const UserProvider = ({children}: IUserProviderProps) => {

    const [editModal, setEditModal] = useState({
        open: false
    } as IEditModal);
    const [loggedUser, setLoggedUser ] = useState({} as iUser)

    const createUser = async (data: iUser) => {
        try{
            
            const response = await instance.post("users/register/", data)
            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

    const editUser = async (data: iUserEdit, id: number) => {
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
            editModal,
            setEditModal,
            loggedUser,
            setLoggedUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}