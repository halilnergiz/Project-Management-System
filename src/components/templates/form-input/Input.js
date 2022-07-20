import React from 'react';
import styled from 'styled-components';
import { TextInput, ErrorMessage } from '../../UI/molecules/Input';

const TextLabel = styled.label`
    color:white;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 14px;
`;

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ name, onBlur, onChange, errorMessage, labelName, inputType }, ref) => {
  return (
    <>
      <TextLabel>{`${labelName}`}</TextLabel>
      <TextInput name={name} onBlur={onBlur} onChange={onChange} ref={ref} type={inputType}/>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
});

export default Input;
