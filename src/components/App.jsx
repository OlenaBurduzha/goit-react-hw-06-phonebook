import React from 'react';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import ContactFilter from './ContactFilter/ContactFilter';

function App(){
const [contacts, setContacts]=useState(()=>{
  return JSON.parse(localStorage.getItem('contacts')) ??[];
});

useEffect(()=>{
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const [filter, setFilter]=useState('');

const addContact = (name, number) => {
const contact = {
  id: shortid.generate(),
  name,
  number,
};

  if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),
)) {
  alert(`${name} is already in contacts.`);
} else if (contacts.find(contact => contact.number === number)) {
  alert(`${number} is already in contacts.`);
  }else {
  setContacts(prevContacts => [contact, ...prevContacts]);
  };
};

const deleteContact=contactid=>{
  setContacts(contacts.filter(({id}) => id !== contactid));
};

const changeFilter=evt=>{
  setFilter(evt.currentTarget.value);
};

const getVisibleContacts = () => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};


return (
  <Container>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={addContact} />
    <h2>Contacts</h2>
    {contacts.length > 1 && <ContactFilter value={filter} onChange={changeFilter} />}

    {contacts.length > 0 ?
      (<ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
       />) : (
          <p>Please, add your first contact</p>
        )}
  </Container>
    );
};

export default App;



//APP на класах

// export default class App extends Component {
//   state = {
//     contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//   };

//     componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const { contacts } = this.state;

//     if(
//       contacts.find( contact => contact.name === name)
//     ) {alert(`${name} is already in contacts.`);
//     }else if (contacts.find(contact => contact.number === number)) {
//       alert(`${number} is already in contacts.`);
//     }else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };


//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         {contacts.length > 1 && (
//           <ContactFilter value={filter} onChange={this.changeFilter} />
//         )}
//         {contacts.length > 0 ? (
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         ) : (
//           <p>Please add first contact</p>
//         )}
//       </Container>
//     );
//   }
// }

