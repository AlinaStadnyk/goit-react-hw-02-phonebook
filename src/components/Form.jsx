const Form = ({ handleChange, handleSubmit, name, number }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      type="text"
      name="name"
      required
      value={name}
      onChange={handleChange}
    />
    <label>Number</label>
    <input
      type="tel"
      name="number"
      required
      value={number}
      onChange={handleChange}
    />
    <button type="submit">Add contact</button>
  </form>
);

export default Form;
