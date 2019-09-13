import * as React from "react";
import { User } from "./store/user/types";
import {removeUser} from "./store/user/actions";

interface UsersListStoreProps {
    users: User[];
    removeUser: typeof removeUser;
}

const UserList: React.FunctionComponent<UsersListStoreProps> = props => {

    return (
        <div>
            {props.users.length === 0
                ? <p>No Users</p>
                : (
                    <ul>
                        {props.users.map(user => (
                            <li key={user.id}>ID: {user.id}, Username: {user.name}
                            <button onClick={() => props.removeUser(user.id)}>X</button></li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default UserList;
