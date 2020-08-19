import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' } ]);
  const [ newName, setNewName ] = useState('');
  const handleNmaeChange = (event) => {
    console.log('change', event.target.value);
    setNewName(event.target.value);
  };

  const handleSetPerson = (event) => {
    event.preventDefault();

    console.log(newName);
    const newUser = {
      name: newName
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>debug:{persons.map((person, index) => <li key={index}>{person.name}</li>)}</div>
    </div>
  );
};

export default App;
