import React from 'react';
import styled from 'styled-components';
import loginLogo from '../login-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const LoginContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LoginForm = styled.div`
    border-radius: 0px 500px 0px 0px;
    height: 100%;
    width: 50%;
    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Email = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
`;

export const Password = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
`;

export const Submit = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;

    cursor: pointer;
`;

export const ErrorMessage = styled.p`
    color: white;
`;

const Register = styled.button`
    margin-top: 2rem;
    border: none;
    outline: none;
    padding: 5px 30px;
    border-radius: 3px;

    cursor: pointer;
    background-color: #EE8C3A;
`;

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
      <LoginForm>
        <Form onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
          <Email {...register('email')} placeholder='email' />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Password {...register('password')} type='password' placeholder='password' />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Submit type='submit' />
        </Form>
        <Register>Register</Register>
      </LoginForm>

      <LogoSide>
        <Logo />
      </LogoSide>
    </LoginContent>
  );
};

export default Login;
