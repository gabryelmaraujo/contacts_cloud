import React, { createContext, useState } from "react";
import { iContact } from "../@types/contacts";

interface iContactValues{
    editContactModal: boolean;
    setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>;
    contacts: iContact[];
    setContacts: React.Dispatch<React.SetStateAction<iContact[]>>;
    contactSearch: string;
    setContactSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactContext = createContext({} as iContactValues);

interface iContactProps{
    children: React.ReactNode;
}

export const ContactProvider = ({children}: iContactProps) => {
    const [editContactModal, setEditContactModal] = useState(false);
    const [contacts, setContacts] = useState([] as iContact[])
    const [contactSearch, setContactSearch] = useState('')

    return(
        <ContactContext.Provider value={{
            editContactModal,
            setEditContactModal,
            contacts,
            setContacts,
            contactSearch,
            setContactSearch
        }}>
            {children}
        </ContactContext.Provider>
    )
}