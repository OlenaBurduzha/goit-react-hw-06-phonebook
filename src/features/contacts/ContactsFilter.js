import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "./redux/contacts.slice";
import styles from './ContactsFilter.module.css';
import PropTypes from 'prop-types';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const onQueryChenged = (filter) => {
    dispatch(setFilter(filter));

  };


  return (
    <>
      <h4 className={styles.label}>Find your contact</h4>
      <input  className={styles.input}
        placeholder="Enter contact name"
        onChange={(e) => onQueryChenged(e.target.value)}
        value={filter}
      />
    </>
  );
};

Event.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

