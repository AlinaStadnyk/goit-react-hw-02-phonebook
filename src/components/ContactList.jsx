import Contact from './Contact';
const ContactList = ({ list, handleDelete }) => {
  console.log(list);
  return list.map(el => (
    <Contact contact={el} key={el.id} handleDelete={handleDelete} />
  ));
};

export default ContactList;
