import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { observer } from 'mobx-react';
import Swal from 'sweetalert2';

import loginLogo from '../../assets/login-logo.png';
import Input from '../templates/form-input/Input';
import { Form } from '../UI/atoms/Form.js';
import { Title } from '../UI/atoms/Texts.js';
import { Submit, NavButton } from '../UI/atoms/Buttons.js';
import { useNavigate } from 'react-router';

/* Register Form Style */
const RegisterContent = styled.div`
    height: 100%;
    width: 100%;
    display:flex ;
    flex-direction: row;
    justify-content: center;
    position: relative;
    font-family: 'Montserrat', sans-serif;
`;

const RegisterFormContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#161616;
    border-radius: 10% 0% 0% 10% / 40% 0% 0% 40% ;
    text-transform: capitalize;
`;

const FormRegister = styled(Form)`
    width: 50%;
`;

/* Logo Style */
const RegisterLogoSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const İcon = styled.i`
    margin-bottom: 1rem;
`;

const Logo = styled.img`
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

Logo.defaultProps = {
  src: loginLogo
};

// yup Register Schema 
const schema = yup.object({
  name: yup.string().min(3).max(50).required(),
  email: yup.string().email().max(50).required(),
  password: yup.string().min(8).max(20).required(),
}).required();

// Register Component
const Register = observer(() => {

  const navigate = useNavigate();

  // yup & useForm integration
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // register request
  const checkRegister = async (data) => {

    await axios.post('/auth/register', {
      email: data.email,
      name: data.name,
      password: data.password
    })
      .then(() => {        
        setTimeout(() => {
          navigate('/');
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Please Login',
            showConfirmButton: true,
          });
        }, 500);
      });
  };

  return (
    <RegisterContent>

      <RegisterLogoSide>
        <Logo />
        <İcon className="fa-xl fa-solid fa-diagram-project"></İcon>
        <h2>Bize Katıl</h2>
        <h2>Geleceğe Adım At</h2>
        <h3>Projelerini adım adım takip et, kısa sürede çok iş başar!</h3>
      </RegisterLogoSide>

      <RegisterFormContent>

        <FormRegister onSubmit={handleSubmit(checkRegister)} autoComplete='off' >

          <Title>Register</Title>
          <Input {...register('name')} errorMessage={errors.name?.message} labelName='name' />
          <Input {...register('email')} errorMessage={errors.email?.message} labelName={'email'} />
          <Input {...register('password')} errorMessage={errors.password?.message} inputType='password' labelName={'password'} />
          <Submit type="submit" value='Register' />

        </FormRegister>

        <NavButton to={'/'}>Back To Login</NavButton>

      </RegisterFormContent>
    </RegisterContent >
  );
});

export default Register;