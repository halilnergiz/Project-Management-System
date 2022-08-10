import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Column = styled.div`
  border: 1px solid blue;
  /* width: 320px; */
  height: max-content;
  padding: 10px;
`;

const KanbanColumn = () => {

  // useEffect(() => {
  //   axios.put('/issue/assignie-user/82/1')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

  return (
    <Column>
      
    </Column>
  );
};

export default KanbanColumn;
