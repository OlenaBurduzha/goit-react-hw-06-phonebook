import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./redux/contacts.slice";
import styles from './CreateContact.module.css';


export const CreateContact = () => {
const [newUserFirstName, setNewUserFirstName] = useState("");
const [newUserNumber, setNewUserNumber]=useState("");
const dispatch = useDispatch();

  const onAddNewContact = () => {

    const newContact = { id: nanoid(), firstName: newUserFirstName, userNumber: newUserNumber };
    dispatch(addContact(newContact));
    setNewUserFirstName("");
    setNewUserNumber("");
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.label}>Add a contact</h3>
      <input className={styles.input}
        placeholder="Enter name of contact"
        value={newUserFirstName}
        onChange={(e) => setNewUserFirstName(e.target.value)}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input className={styles.input}
        placeholder="Enter contact number "
        value={newUserNumber}
        onChange={(e) => setNewUserNumber(e.target.value)}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.btn} onClick={onAddNewContact}>Add contact</button>
    </form>
  );
};
