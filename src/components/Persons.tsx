import React from 'react';

const Persons = ({ results }) => {
  const resultRender = () => {
    if(results.length == 1) {
      const result = results[0]
      return(
        <div>
          <h1>{result.name}</h1>
      <p>capital: {result.capital}</p>
      <p>popuration: {result.population}</p>
      <h2>Languages</h2>
      <div>
        {result.languages.map((lang) => <li key={lang.iso639_1}>{lang.name}</li>)}
      </div>
      <img src={result.flag} style={{width: '300px', height: '200px'}} alt=""  ></img>
        </div>
      )
    } else if(results.length > 10){
      return (<div>Too many matches</div>)
    }else {
      return(
      <div>
      {results.map((person, index) => (
        <li key={index}>
          {person.name}
        </li>
      ))}
      </div>)
    }
  }
  return (
  <div>{resultRender()}</div>
  );
};

export default Persons;
