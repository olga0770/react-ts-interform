import * as React from "react";

interface UserInterfaceProps {
    name: string;
    addUser: (name: string) => void;
    onNameChange: (name: string) => void;
}

const UserInterface: React.FunctionComponent<UserInterfaceProps> = props => {

    function keyPress(e: React.KeyboardEvent<any>) {
        console.log(e.key);
        if (e.key === "Enter") {
            add();
        }
    }

    function add() {
        props.addUser(props.name);
        console.log('user name', props.name);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {props.onNameChange(e.currentTarget.value)};

    return (
            <div>
                <input
                    type="text"
                    value={props.name}
                    onChange={handleNameChange}
                    onKeyPress={keyPress}
                    className="user-input"
                    placeholder="Type a user name..."
                />
                <input type="submit" value="Add New User" onClick={add}/>
            </div>
        );
};

export default UserInterface;
