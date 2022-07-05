import React from 'react';
import styled from 'styled-components';

const NotFound = styled.h1`
    display: flex;
    justify-content: center;
`;

const NoMatch = () => {
  return (
    <NotFound>
      404 NOT FOUND!
    </NotFound>
  );
};

export default NoMatch;
