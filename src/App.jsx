import "./styles.css";
import { Component } from "react";
import Users from "./components/Users";
import axios from "axios";
import Modal from "./components/Modal";

const api = "https://reqres.in/api/users/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      isDark: false,
      users: [],
      isModalOpen: false
    };
  }

  componentDidMount() {
    axios.get(api).then((data) => this.setState({ users: data.data.data }));
  }

  search = (e) => {
    this.setState({ inputValue: e.target.value });
    console.log(e.target.value);
  };

  changeMode = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  deleteUser = (userToDelete) => {
    console.log(userToDelete);
    const updatedList = this.state.users.filter(
      (user) => user.id !== userToDelete.id
    );
    this.setState({ users: updatedList });
  };

  handleModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleNewUser = (event) => {
    event.preventDefault();
    const { users } = this.state;
    let newUserId = users[users.length - 1].id;

    let newUser = {
      id: ++newUserId,
      email: event.target.email.value,
      first_name: event.target.firstname.value,
      last_name: event.target.lastname.value,
      avatar: event.target.url.value
    };

    const newUsers = [...this.state.users, newUser];
    this.setState({ users: newUsers });
    this.handleCloseModal();
  };

  render() {
    const filteredData = this.state.users.filter((user) => {
      return user.first_name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
    const themeText = this.state.isDark ? "Light Mode" : "Dark Mode";
    const { isDark, isModalOpen } = this.state;
    return (
      <>
        {isModalOpen ? (
          <Modal
            onCloseModal={this.handleCloseModal}
            onNewUser={this.handleNewUser}
          />
        ) : (
          <main>
            <div className={isDark && "dark-mode"}>
              <button onClick={this.handleModal}>Add User</button>
              <input type="text" placeholder="Search" onChange={this.search} />
              <button className="mode-btn" onClick={this.changeMode}>
                {themeText}
              </button>

              {filteredData.length === 0 ? (
                <p>No Users Found</p>
              ) : (
                <Users data={filteredData} onDelete={this.deleteUser} />
              )}
            </div>
          </main>
        )}
      </>
    );
  }
}

export default App;
