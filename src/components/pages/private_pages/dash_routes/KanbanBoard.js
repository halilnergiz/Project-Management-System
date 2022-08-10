import React from 'react';
import styled from 'styled-components';
import KanbanColumn from '../../../templates/sub_components/Kanban/KanbanColumn';
import { Container } from '../../../UI/atoms/Container';
import { mainColors } from '../../../UI/staticStyle/staticStyle';

const Board = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 98%;
  margin: 15px;
  display: flex;
  flex-wrap: nowrap;
  
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;

  justify-content: space-evenly;

  ::-webkit-scrollbar {
  height: 10px;
  background: ${mainColors.orange}; 
  border-radius: 5px;
}
`;

const KanbanBoard = () => {
  return (
    <Container>
      <Board>
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />
      </Board>
    </Container>
  );
};

export default KanbanBoard;
