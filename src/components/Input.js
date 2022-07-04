import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 3px;
    height: 25px;
`;

const ErrorMessage = styled.p`
    color: white;
`;

const TextLabel = styled.label`
    color:white;
    display: inline-block;
    margin-bottom: 10px;
`;

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ name, onChange, onBlur, errorMessage, inputType, labelName }, ref) => {
  return (
    <>
      <TextLabel>{`${labelName}`}</TextLabel>
      <TextInput name={name} onChange={onChange} onBlur={onBlur} ref={ref} type={inputType} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
});

export default Input;
