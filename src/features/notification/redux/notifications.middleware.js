
import { addContact, deleteContact } from "features/contacts/redux/contacts.slice";
import { addNotification } from "./notification.slice";

export const notificationsMiddleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    if (addContact.match(action)) {
      next(action);
      dispatch(addNotification(`Contact ${action.payload.firstName} was added`));
      return;
    }

    if (deleteContact.match(action)) {
      const contacts = getState().contacts.contacts;
      const contactToDelete = contacts.find(
        (contact) => contact.id === action.payload
      );
      dispatch(
        addNotification(`Contact ${contactToDelete.firstName} was deleted`)
      );
    }

    next(action);
  };
