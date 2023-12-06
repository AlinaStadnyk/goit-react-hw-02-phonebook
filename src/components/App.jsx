import { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  sendUserData = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    const isDuplicated = this.state.contacts.find(el => el.name === data.name);
    if (isDuplicated) {
      return Notiflix.Notify.failure(`${data.name} is already in contacts`);
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
    }));
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <Form sendUserData={this.sendUserData} />

        <h2>Contacts</h2>

        <ContactList
          list={this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
