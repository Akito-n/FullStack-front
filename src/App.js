import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas', number: '1234-52121' } ]);
  const [ newName, setNewName ] = useState('');
  const [ newNomber, setNewNomber ] = useState('');
  const handleNmaeChange = (event) => {
    console.log('change', event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log('change', event.target.value);
    setNewNomber(event.target.value);
  };

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
      <form onSubmit={handleSetPerson}>
        <div>
          name: <input value={newName} onChange={handleNmaeChange} />
        </div>
        <div>
          number: <input value={newNomber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>
        debug:{persons.map((person, index) => (
          <li key={index}>
            {person.name}: {person.number}
          </li>
        ))}
      </div>
    </div>
  );
};

export default App;
