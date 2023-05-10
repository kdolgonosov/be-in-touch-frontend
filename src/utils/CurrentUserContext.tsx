import React, { SetStateAction, Dispatch } from 'react';
import { IUser } from '../interfaces/interfaces';
// interface IUser {
//     _id: string;
//     email: string;
//     password: string;
//     name: string;
//     surname: string;
//     age?: number;
//     city: string;
//     university?: string;
//     friends?: string[];
// }
interface ICurrentUser {
    currentUser: IUser | null;
    setCurrentUser: Dispatch<SetStateAction<null | IUser>>;
}
// export const CurrentUserContext = React.createContext<ICurrentUser | null>(null);
export const CurrentUserContext = React.createContext<null | ICurrentUser>(null);
