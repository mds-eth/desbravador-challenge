import React, { useState } from 'react';

import { toast } from 'react-toastify';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username) {
      return toast.warning('Favor informar usuário a ser localizado.');
    }
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='GitHub Username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
