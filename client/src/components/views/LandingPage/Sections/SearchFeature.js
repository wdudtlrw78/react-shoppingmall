import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature({ refreshFunction }) {
  const [SearchTerm, setSearchTerm] = useState('');

  const searchHandler = (event) => {
    setSearchTerm(event.currentTarget.value);
    refreshFunction(event.currentTarget.value);
  };
  return (
    <Search
      placeholder="Input search text"
      onChange={searchHandler}
      style={{ width: 200 }}
      value={SearchTerm}
    />
  );
}

export default SearchFeature;
