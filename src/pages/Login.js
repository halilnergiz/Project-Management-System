/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import loginLogo from '../assets/login-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, TextInput, ErrorMessage, Submit, NavButton, Title, RequestError } from '../styled-components/Reusable-Components';
import axios from 'axios';
import { observer } from 'mobx-react';
import { API } from '../Theme';
import { useNavigate } from 'react-router-dom';
import 'babel-polyfill';

const LoginContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LoginFormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 500px 0px 0px;
    height: 100%;
    width: 50%;
    background-color: #161616;
`;

const FormLogin = styled(Form)`
  width: 32%;
`;

const TitleLogin = styled(Title)`
  margin-bottom: 2.5rem;
  margin-left: 38%;
`;

const TextInputLogin = styled(TextInput)`
  height: 25px;
`;

const LoginSubmit = styled(Submit)`
  background-color: white;
`;

const GoRegister = styled(NavButton)`
    margin-top: 3rem;
`;

/* Logo Side */
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

/* yup Schema */
const schema = yup.object({
  email: yup.string().email().max(50).required(),
  password: yup.string().min(3).max(20).required(),
}).required();



const Login = observer(({ store }) => {
  
  const navigate = useNavigate();
  localStorage.setItem('clientToken',null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const Authentication = async (user) => {
    console.log(user);
    
    await axios.post(`${API}/auth/login`, {
      email: user.email,
      password: user.password
    })
      .then(response => {
        console.log(response);
        console.log(response.status);
        
        if(response.status == 200){
          const clientToken = response.data.data.token;
          localStorage.setItem('clientToken',clientToken);

          console.log('yes');
          navigate('/dashboard');
        }

      })
      .catch(err => {
        console.log(err);
        store.loginInfMessage = err.response.data.message+' !';
        localStorage.setItem('clientToken',undefined);
      });
  };

  return (
    <LoginContent>
      <LoginFormContent>

        <FormLogin onSubmit={handleSubmit(Authentication)} autoComplete={'off'}>
          <Title>Login</Title>
          <TextInputLogin {...register('email')} placeholder='email' />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <TextInputLogin {...register('password')} type='password' placeholder='password' />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <LoginSubmit type='submit'/>

          <RequestError>{store.loginInfMessage}</RequestError> 

        </FormLogin>

        <GoRegister to={'/register'} onClick={()=> store.loginInfMessage=''}>Register Now</GoRegister>

      </LoginFormContent>

      <LogoSide>
        <Logo />
      </LogoSide>
    </LoginContent>
  );
});

export default Login;
