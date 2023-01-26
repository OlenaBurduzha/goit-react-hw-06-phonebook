import { useDispatch, useSelector } from "react-redux"
import { selectFilteredContacts } from "./redux/selectors";
import { deleteContact } from "./redux/contacts.slice";
import styles from './ContactList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));

  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
            <p className={styles.text}>{contact.firstName}:{contact.userNumber}</p>
            {/* <p className={styles.text}>{contact.userNumber}</p> */}
            <button className={styles.btn} onClick={() => onDeleteContact(contact.id)}>
              Delete contact
            </button>
        </li>
      ))}
    </ul>
  );
};
