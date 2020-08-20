import React from 'react';

const Persons = ({ result, handleDestroy }) => {
  return (
    <div>
      {result.map((person, index) => (
        <li key={index}>
          {person.name} {person.number}<button onClick={() => handleDestroy(person.id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default Persons;
