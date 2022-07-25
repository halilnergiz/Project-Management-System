import React from 'react';
import Input from '../../../templates/form-input/Input';
import { SubmitOrange } from '../../../UI/atoms/Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Form } from '../../../UI/atoms/Form';
import { TitleBlack } from '../../../UI/atoms/Texts';

const CreateSubjectContent = styled.div`
    width: 30%;
    position: relative;
    top: 5rem;
`;

const CreateSubjectForm = styled(Form)`
    background-color: #161616;
    padding: 1.5rem;
    border-radius: 5px;
`;

// create subject yup schema 
const schema = yup.object({
  description: yup.string().min(3).required(),
  title: yup.string().min(3).max(25).required()
}).required();

const CreateSubject = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const InsertSubject = async (project) => {
    await axios.post('/subject', {
      description: project.description,
      title: project.title
    })
      .then((res) => {
        console.log(res);
        console.log(project);
      })
      .catch(()=> {
        console.log(project);
      });
  };
  return (
    <CreateSubjectContent>
      <TitleBlack>Create New Subject</TitleBlack>

      <CreateSubjectForm onSubmit={handleSubmit(InsertSubject)} autoComplete={'off'}>
        <Input {...register('title')} errorMessage={errors.title?.message} labelName='Title' />
        <Input {...register('description')} errorMessage={errors.description?.message} labelName='Description' />
        <SubmitOrange type='submit' value='Create'/>
      </CreateSubjectForm>
    </CreateSubjectContent>
  );
};

export default CreateSubject;
