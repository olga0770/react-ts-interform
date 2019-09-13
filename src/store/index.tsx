import {combineReducers, createStore} from "redux";
import {userReducer} from "./user/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools()
    );
}
