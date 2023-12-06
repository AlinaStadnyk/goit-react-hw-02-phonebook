import { Component } from 'react';
class Form extends Component {
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

    this.props.sendUserData(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={this.name}
          onChange={this.handleChange}
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          required
          value={this.number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;
