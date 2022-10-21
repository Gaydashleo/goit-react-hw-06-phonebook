import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts-slice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Section, Titleh1, Titleh2 } from './App.styled';
// import { useState,useEffect } from 'react';


export function App() {

   
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

