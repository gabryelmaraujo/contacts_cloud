
export interface iUser {
    name: string;
    email: string;
    password: string;
    telephone: string;
}

export interface iLoggedUser {
    token: string;
    user: iUser;
}