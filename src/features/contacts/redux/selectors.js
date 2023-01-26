export const selectFilteredContacts = (state) => {
  return state.contacts.contacts.filter((contact) => {
    return contact.firstName
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase());
  });
};

export const selectContactById = (id) => (state) => {
  return state.contacts.contacts.find((contact) => contact.id === id);
}
