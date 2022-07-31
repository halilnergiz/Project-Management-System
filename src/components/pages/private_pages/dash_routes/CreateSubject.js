import React from 'react';
import { Submit } from '../../../UI/atoms/Buttons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Form } from '../../../UI/atoms/Form';
import { Title } from '../../../UI/atoms/Texts';
import CreateInput from '../../../UI/molecules/CreateInput';


const CreateSubjectContent = styled.div`
    width: 80%;
    position: relative;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
`;

const CreateSubjectForm = styled(Form)`
    padding: 1.5rem;
    border-radius: 5px;
    width: 30%;
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
      title: project.title,
      projectID:83
    })
      .then((res) => {
        console.log(res);
        console.log(project);
        window.location.reload(); // ????
      })
      .catch(()=> {
        console.log(project);
      });
  };

  return (
    <CreateSubjectContent>

      <Title black>Create New Subject</Title>
      <CreateSubjectForm onSubmit={handleSubmit(InsertSubject)} autoComplete={'off'}>
        <CreateInput {...register('title')} errorMessage={errors.title?.message} labelName='Title'/> <br/><br/><br/>
        <CreateInput {...register('description')} errorMessage={errors.description?.message} labelName='Description' />
        <Submit orange type='submit' value='Create'/>
      </CreateSubjectForm>

    </CreateSubjectContent>
  );
};



export default CreateSubject;



