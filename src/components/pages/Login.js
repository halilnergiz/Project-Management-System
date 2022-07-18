/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import loginLogo from '../../assets/login-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import axios from 'axios';

import { Form } from '../UI/atoms/Form.js';
import {Title, RequestMessage } from '../UI/atoms/Texts';
import {Submit, NavButton } from '../UI/atoms/Buttons.js';
import 'babel-polyfill';
import Input from '../templates/form-input/Input';

/* Login Form Style */
const LoginContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
`;

const LoginFormContent = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 500px 0px 0px;
    background-color: #161616;
`;

const FormLogin = styled(Form)`
  width: 32%;
`;

/* Logo Style */
const LogoSide = styled.div`
    height: 100%;
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;  
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

/* yup Register schema */
export const schema = yup.object({
  email: yup.string().email().max(50).required(),
  password: yup.string().min(8).max(25).required()
}).required();

// Login Component 
const Login = observer(({ store }) => {

  const API_URL = process.env.API_URL;

  const navigate = useNavigate();
  // yup & useForm integration
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // login request - authentication
  const Authentication = async (user) => {

    await axios.post(`${API_URL}/auth/login`, {
      email: user.email,
      password: user.password
    })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          const clientToken = res.data.data.token;
          localStorage.setItem('clientToken', clientToken);
          store.loginInfMessage = '';
          navigate('/dashboard');
        }
      })
      .catch(err => {
        store.loginInfMessage = err.response.data.message + ' !';
        localStorage.setItem('clientToken', null);
      });
  };

  return (
    <LoginContent>
      <LoginFormContent>
        <FormLogin onSubmit={handleSubmit(Authentication)} autoComplete={'off'}>
          <Title>Login</Title>
          <Input {...register('email')} errorMessage={errors.email?.message} labelName={'email'} />
          <Input {...register('password')} errorMessage={errors.password?.message} inputType='password' labelName={'password'} />
          <Submit type='submit' />

          <RequestMessage> {store.loginInfMessage}</RequestMessage>
        </FormLogin>

        <NavButton to={'/register'} onClick={() => store.registerInfMessage = ''}>Register Now</NavButton>

      </LoginFormContent>

      <LogoSide>
        <Logo />
      </LogoSide>

    </LoginContent>
  );
});

export default Login;