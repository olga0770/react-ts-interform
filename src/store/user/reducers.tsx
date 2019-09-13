import {ADD_USER, REMOVE_USER, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
    users: []
};

export function userReducer(state = initialState, action: UserActionTypes) {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            };

        case REMOVE_USER:
            return {
                users: state.users.filter(user => user.id !== action.meta.id)
            };

        default:
            return state;
    }
}

