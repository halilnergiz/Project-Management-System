import React from 'react';
import styled from 'styled-components';
import loginLogo from '../login-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, TextInput, ErrorMessage, Submit, NavButton, Title } from '../styled-components/Reusable-Components';

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



const schema = yup.object({
  email: yup.string().email().max(50).required(),
  password: yup.string().min(4).max(20).required(),
}).required();

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  return (
    <LoginContent>
      <LoginFormContent>
        <FormLogin onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
          <TitleLogin>Login</TitleLogin>
          <TextInputLogin {...register('email')} placeholder='email' />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <TextInputLogin {...register('password')} type='password' placeholder='password' />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <LoginSubmit type='submit' />
        </FormLogin>
        <GoRegister to={'/register'}>Register Now</GoRegister>
      </LoginFormContent>

      <LogoSide>
        <Logo />
      </LogoSide>
    </LoginContent>
  );
};

export default Login;
