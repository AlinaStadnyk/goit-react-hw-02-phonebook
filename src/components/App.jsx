import { Component } from 'react';
import Form from './Form';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
        />

        {/* <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... /> */}
      </div>
    );
  }
}
export default App;
