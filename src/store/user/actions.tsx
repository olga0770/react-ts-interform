import {User, ADD_USER, REMOVE_USER, UserActionTypes} from "./types";

export function addUser(newUser: User): UserActionTypes {
    return {
        type: ADD_USER,
        payload: newUser
    }
}

export function removeUser(id: string): UserActionTypes {
    return {
        type: REMOVE_USER,
        meta: {
            id
        }
    }
}
