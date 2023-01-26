import { ContactPage } from "features/contacts/Contacts";
import { Notifications } from "features/notification/Notifications";
import styles from 'App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <ContactPage />
      <Notifications />
    </div>
  );
};

export default App
