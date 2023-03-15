import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState('');
  const [target, setTarget] = useState('');

  const handleValuesChange = (event) => {
    setValues(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send the user input to the backend server and update the result
  };

  return (
    <div>
      <h1>Find Combination</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Values:
          <input type="text" value={values} onChange={handleValuesChange} />
        </label>
        <br />
        <label>
          Target:
          <input type="text" value={target} onChange={handleTargetChange} />
        </label>
        <br />
        <button type="submit">Find Combination</button>
      </form>
      {/* TODO: Display the result of the calculation */}
    </div>
  );
}

export default App;
