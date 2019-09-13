import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";
import {UserState} from "./store/user/types";
import { addUser, removeUser } from "./store/user/actions";
import UserInterface from "./UserInterface";
import UserList from "./UserList";

interface AppProps {
  addUser: typeof addUser;
  removeUser: typeof removeUser;
  user: UserState;
}

class App extends React.Component<AppProps> {
  state = { id: '', name: '' };

/*    componentDidMount() {
      this.props.addUser({
          id: Date.now().toString(),
          name: "Your Username will come next...  "
      });
    }*/

    private handleNameChange = (name: string) => {
        this.setState({name: name})
    };

    onAddUser = (name: string) => {
        this.props.addUser({
            id: Date.now().toString(),
            name: name
        });
        this.setState({ name: '' });
    };

    render() {
    return (
        <div className="parent">
          <UserInterface
              name={this.state.name}
              addUser={this.onAddUser}
              onNameChange={this.handleNameChange}
          />
          <UserList
              users={this.props.user.users}
              removeUser={this.props.removeUser}
          />
        </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  user: state.user
});

export default connect(
    mapStateToProps,
    { addUser, removeUser }
)(App);
