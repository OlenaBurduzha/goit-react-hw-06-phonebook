import { CreateContact } from "./CreateContact";
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { useSelector } from "react-redux";
import styles from "./Contacts.module.css";

export const ContactPage = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <>
      <CreateContact />
      <>
        {contacts.lengh > 0 && (
          <h1 className={styles.title}>You have {contacts.lengh} contacts in you phone-book</h1>
        )}
      </>
      <ContactsFilter />
      <ContactsList />
    </>
  );
};
