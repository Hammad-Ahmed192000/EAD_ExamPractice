import React, { useState } from 'react';

const MyTextbox2 = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter text..."
    />
  );
};

export default MyTextbox2;