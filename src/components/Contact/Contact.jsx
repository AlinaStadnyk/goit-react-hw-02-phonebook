import css from './Contact.module.css';
const Contact = ({ contact, handleDelete }) => {
  return (
    <div className={css.item}>
      <li className={css.contact}>
        {contact.name}: {contact.number}
      </li>
      <button className={css.button} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
