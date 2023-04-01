import React from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Section, MainTitle, SecondaryTitle } from "./App.styled";

const App = () => {
  return (
    <Section>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Section>
  );
}

export default App;