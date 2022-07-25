import React from 'react';
import { TextInput, ErrorMessage, TextLabel } from '../../UI/molecules/Input';

// eslint-disable-next-line react/display-name
const CreateInput = React.forwardRef(({ name, onBlur, onChange, errorMessage, labelName, inputType }, ref) => {
  return (
    <>
      <TextLabel createForm>{`${labelName}`}</TextLabel>
      <TextInput createForm name={name} onBlur={onBlur} onChange={onChange} ref={ref} type={inputType} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
});

export default CreateInput;
