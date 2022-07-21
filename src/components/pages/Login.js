/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import 'babel-polyfill';
import loginLogo from '../../assets/login-logo.png';
import axios from 'axios';
import {toast} from 'react-toastify';
import { Form } from '../UI/atoms/Form.js';
import {Title } from '../UI/atoms/Texts';
import {Submit, NavButton } from '../UI/atoms/Buttons.js';
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


console.log(localStorage);

// Login Component 
const Login = observer(({ store }) => {

  const navigate = useNavigate();

  // yup & useForm integration
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  // login request - authentication
  const Authentication = async (user) => {
  
    await axios.post('/auth/login', {
      email: user.email,
      password: user.password
    }) 
      .then(res => {
        store.token = localStorage.getItem('clientToken');
        navigate('/dashboard');
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  
  // useEffect(()=>{
  //   toast.promise(Authentication,  {
  //     pending: 'loading',
  //     success: 'promise is loaded',
  //     error: 'error'
  //   });
  // }, []);

  return(
    <LoginContent>

      <LoginFormContent>
        <FormLogin onSubmit={handleSubmit(Authentication)} autoComplete={'off'}>
          <Title>Login</Title>
          <Input {...register('email')} errorMessage={errors.email?.message} labelName={'email'} title={'submit'} />
          <Input {...register('password')} errorMessage={errors.password?.message} inputType='password' labelName={'password'} />
          <Submit type='submit' />
          {/* <Notification store={store}/> */}
        </FormLogin>

        <NavButton to={'/register'}>Register Now</NavButton>
      </LoginFormContent>

      <LogoSide>
        <Logo />
      </LogoSide>
  
    </LoginContent>
  );
});

export default Login;