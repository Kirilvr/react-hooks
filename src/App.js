import React, { useState, useEffect } from 'react';

const useLogger = (value) => {
  useEffect(() => {
    console.log('Value target: ', value);
  }, [value]);
};

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue('');

  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

export const App = () => {
  const input = useInput('');
  const lastName = useInput('');

  useLogger(input.value);

  return (
    <div className="containet pt-3">
      <input type="text" {...input.bind} />
      <input type="text" {...lastName.bind} />
      <button
        className="btn btn-warning"
        onClick={() => {
          input.clear();
          lastName.clear();
        }}
      >
        Clean
      </button>
      <hr />
      <h1>
        {input.value} {lastName.value}
      </h1>
    </div>
  );
};
