import React, { useState } from 'react';

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
      <div>
        <label>search</label>
        <input value={searchWord} onChange={handleSearch} />
      </div>
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
        {result.map((person, index) => (
          <li key={index}>
            {person.name}: {person.number}
          </li>
        ))}
      </div>
      <div>
        debug: <p>{searchWord}</p>
      </div>
    </div>
  );
};

export default App;
