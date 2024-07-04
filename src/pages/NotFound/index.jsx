import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import { useSessionContext } from '@contexts/AuthContext';

const NotFound = () => {

  const { isAuthenticated } = useSessionContext();

  return (
    <Container>
      <h1>404 - Not Found</h1>
      <img src="https://media1.tenor.com/m/_BiwWBWhYucAAAAd/what-huh.gif" alt="" />

      <Link to={`${isAuthenticated ? '/dashboard' : '/'}`}>
        Back {isAuthenticated ? 'Dashboard' : 'Login'}
      </Link>
    </Container >
  );
};

export default NotFound;
