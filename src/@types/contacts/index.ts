

export interface iContact {
    id?: number;
    name: string;
    email: string;
    telephone: string;
}

export interface iContactsData {
    contacts: Array<iContact>
}
