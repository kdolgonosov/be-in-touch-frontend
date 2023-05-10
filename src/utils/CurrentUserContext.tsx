import React, { SetStateAction, Dispatch } from 'react';
import { IUser } from '../interfaces/interfaces';
interface ICurrentUser {
    currentUser: IUser | null;
    setCurrentUser: Dispatch<SetStateAction<null | IUser>>;
}
export const CurrentUserContext = React.createContext<null | ICurrentUser>(null);
