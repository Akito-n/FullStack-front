import React from 'react';

const Persons = ({ result }) => {
  return (
    <div>
      {result.map((person, index) => (
        <li key={index}>
          {person.name}: {person.number}
        </li>
      ))}
    </div>
  );
};

export default Persons;
