import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Submit } from '../../../UI/atoms/Buttons';
import { Form } from '../../../UI/atoms/Form';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { Title } from '../../../UI/atoms/Texts';
import CreateInput from '../../../UI/molecules/CreateInput';

const CreateProjectContent = styled.div`
    width: 80%;
    height: 200px;
    position: relative;
    top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
`;

const CreateProjectForm = styled(Form)`
    padding: 1.5rem;
    border-radius: 5px;
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

// create project yup schema 
const schema = yup.object({
  description: yup.string().min(3).required(),
  title: yup.string().min(3).max(25).required()
}).required();

const CreateProject = observer(() => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const InsertProject = async (project) => {
    await axios.post('/project', {
      description: project.description,
      title: project.title
    })
      .then((res) => {
        console.log(res);
        console.log(project);
        console.log('proje eklendi 2');
      })
      .catch(()=> {
        console.log(localStorage.getItem('clientToken'));
      });
  };

  return (
    <CreateProjectContent>
      <Title black>Create New Project</Title>
        
      <CreateProjectForm onSubmit={handleSubmit(InsertProject)} autoComplete={'off'}>
        <CreateInput {...register('title')} errorMessage={errors.title?.message} labelName='Title'/> <br/><br/><br/>
        <CreateInput {...register('description')} errorMessage={errors.description?.message} labelName='Description' />
        <Submit orange type='submit' value='Create'/>
      </CreateProjectForm>
    </CreateProjectContent>
  );
});

export default CreateProject;
