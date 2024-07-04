import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { useGitHubContext } from '../../contexts/GitHubContext';

const SearchForm = ({ onSearch }) => {

  const { userName } = useGitHubContext();

  const [username, setUsername] = useState(userName || '');

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
