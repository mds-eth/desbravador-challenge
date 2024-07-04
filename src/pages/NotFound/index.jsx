import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const NotFound = () => {
  return (
    <Container>
      <h1>404 - Not Found</h1>
      <img src="https://media1.tenor.com/m/_BiwWBWhYucAAAAd/what-huh.gif" alt="" />

      <Link to={`/`}>
        Back Login
      </Link>
    </Container >
  );
};

export default NotFound;
