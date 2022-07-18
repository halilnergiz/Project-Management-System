import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Unauthorize = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Unauthorized = () => {
  return (
    <Unauthorize>
      <h1>Unauthorized</h1>
      <br/>
      <h2>Please Login</h2>
      <Link to={'/'}>Go To Login Page</Link>
    </Unauthorize>
  );
};

export default Unauthorized;
