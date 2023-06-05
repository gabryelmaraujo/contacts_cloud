
export interface iUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    telephone: string;
}

export interface iUserEdit {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    telephone?: string;
}

export interface iLoggedUser {
    token: string;
    user: iUser;
}