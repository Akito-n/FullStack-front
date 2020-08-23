import React from 'react';


const Persons = ({ result, handleDestroy }:any) => {
  return (
    <div>
      {result.map((person: any, index: number) => (
        <li key={index}>
          {person.name} {person.number}<button onClick={() => handleDestroy(person.id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default Persons;
