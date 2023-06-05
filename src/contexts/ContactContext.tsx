import { createContext } from "react";

interface iContactValues{

}

export const ContactContext = createContext({} as iContactValues);

interface iContactProps{
    children: React.ReactNode;
}

export const ContactProvider = ({children}: iContactProps) => {
    return(
        <ContactContext.Provider value={{}}>
            {children}
        </ContactContext.Provider>
    )
}