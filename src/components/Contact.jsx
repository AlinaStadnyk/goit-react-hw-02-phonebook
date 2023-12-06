const Contact = ({ contact, handleDelete }) => {
  return (
    <>
      <li>
        {contact.name}: {contact.number}
      </li>
      <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </>
  );
};
export default Contact;
