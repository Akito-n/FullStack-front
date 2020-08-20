import React, { useState, useEffect } from 'react';
import NewPersonForm from './components/newPersonFrom.jsx';
import SeachPerson from './components/searchPerson.tsx';
import Persons from './components/Persons.tsx';
import PersonService from './service/person.ts'

const App = () => {
  const [ persons, setPersons ] = useState([
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNomber, setNewNomber ] = useState('');
  const [ searchWord, setSerchWord ] = useState('');

  const hook = () => {
    PersonService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }

  useEffect(hook, [])

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
    PersonService.create(newUser).then(returnedUser => setPersons(persons.concat(returnedUser)))
    setNewName('');
    setNewNomber('')
  };

  const handleDestroy = (id) => {
      PersonService.destroy(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
    }

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
      <Persons result={result} handleDestroy={handleDestroy} />
      <div>
        debug: <p>{searchWord}</p>
      </div>
    </div>
  );
};

export default App;
