import React from 'react';
import { TextInput, ErrorMessage, TextLabel } from '../../UI/molecules/Input';


// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({ name, onBlur, onChange, errorMessage, labelName, inputType }, ref) => {
  return (
    <>
      <TextLabel>{`${labelName}`}</TextLabel>
      <TextInput name={name} onBlur={onBlur} onChange={onChange} ref={ref} type={inputType} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
});

export default Input;
