import React, { useState } from 'react';
import NewPersonForm from './components/newPersonFrom.jsx';
import SeachPerson from './components/searchPerson.tsx';
import Persons from './components/Persons.tsx';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNomber, setNewNomber ] = useState('');
  const [ searchWord, setSerchWord ] = useState('');

  const handleNmaeChange = (event) => {
    console.log('change', event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log('change', event.target.value);
    setNewNomber(event.target.value);
  };

  const handleSearch = (e) => {
    console.log(searchWord);
    setSerchWord(e.target.value);
  };

  const result =
    searchWord === ''
      ? persons
      : persons.filter((person) => {
          return person.name.includes(searchWord);
        });

  const handleSetPerson = (event) => {
    event.preventDefault();
    const personNames = persons.map((person) => person.name);
    if (personNames.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    const newUser = {
      name: newName,
      number: newNomber
    };
    setPersons(persons.concat(newUser));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SeachPerson handleSearch={handleSearch} searchWord={searchWord} />
      <NewPersonForm
        handleSetPerson={handleSetPerson}
        newName={newName}
        newNomber={newNomber}
        handleNmaeChange={handleNmaeChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      ...
      <Persons result={result} />
      <div>
        debug: <p>{searchWord}</p>
      </div>
    </div>
  );
};

export default App;
