import React, { createContext, useState } from "react";

interface iContactValues{
    editContactModal: boolean;
    setEditContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactContext = createContext({} as iContactValues);

interface iContactProps{
    children: React.ReactNode;
}

export const ContactProvider = ({children}: iContactProps) => {
    const [editContactModal, setEditContactModal] = useState(false);
    
    return(
        <ContactContext.Provider value={{
            editContactModal,
            setEditContactModal
        }}>
            {children}
        </ContactContext.Provider>
    )
}