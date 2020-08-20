import React from 'react';

const NewPersonForm = (props) => {
  return (
    <form onSubmit={props.handleSetPerson}>
      <div>
        name: <input value={props.newName} onChange={props.handleNmaeChange} />
      </div>
      <div>
        number: <input value={props.newNomber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewPersonForm;
