import React from 'react';
import Input from '../../../templates/form-input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { SubmitOrange } from '../../../UI/atoms/Buttons';
import { Form } from '../../../UI/atoms/Form';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { TitleBlack } from '../../../UI/atoms/Texts';

const CreateProjectContent = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
    top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CreateProjectForm = styled(Form)`
    background-color: #161616;
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
      })
      .catch(()=> {
        console.log(project);
      });
  };

  return (
    <CreateProjectContent>
      <TitleBlack>Create New Project</TitleBlack>
        
      <CreateProjectForm onSubmit={handleSubmit(InsertProject)} autoComplete={'off'}>
        <Input {...register('title')} errorMessage={errors.title?.message} labelName='Title' />
        <Input {...register('description')} errorMessage={errors.description?.message} labelName='Description' />
        <SubmitOrange type='submit' value='Create'/>
      </CreateProjectForm>
    </CreateProjectContent>
  );
});

export default CreateProject;
