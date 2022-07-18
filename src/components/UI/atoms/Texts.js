import styled, { css, keyframes } from 'styled-components';

export const Title = styled.h2`
    color: white;
    user-select: none;
`;

const errorAniamtion = keyframes`
      from {
    color: red;
  }

  to {
    color: green;
  }
`;  

export const RequestMessage = styled.span`
    color: white;
    margin-top: 10%;
    font-size: 14px;
    color: #f24547;
    ${props => props.successMessage && css`
      color: green;
    `};
    /* #f24547 */
    /* visibility: hidden; */
    /* animation: ${errorAniamtion} 3s ease-in-out; */
`;

