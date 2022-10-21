import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Titleh1, Titleh2 } from './App.styled';
// import { useState,useEffect } from 'react';


export function App() {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  
 


  // Перевіряємо localStorage чи є контакти
  // useEffect(() => {
  //   const contactsStorage = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsStorage);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   } else {
  //     return;
  //   }
  // }, []);
    
  // Додає контакт в localStorage
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

   
    return (
      <Container>
        <Section title="Phonebook">
          <Titleh1>Phonebook</Titleh1>
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Titleh2>Contacts</Titleh2>
          <Filter  />
          <ContactList/>
        </Section>
      </Container>
    );
  }

