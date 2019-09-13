export interface User {
    id: string;
    name: string;
}

export interface UserState {
    users: User[];
}

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
}

interface RemoveUserAction {
    type: typeof REMOVE_USER;
    meta: {
        id: string;
    }
}

export  type UserActionTypes = AddUserAction | RemoveUserAction;


