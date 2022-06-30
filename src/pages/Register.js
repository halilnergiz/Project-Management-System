/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginLogo from '../login-logo.png';

const RegisterContent = styled.div`
    height: 100%;
    width: 100%;
    display:flex ;
    flex-direction: row;
    justify-content: center;
    position: relative;
`;

const RegisterForm = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* background-color: #ff4e00;
    background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%); */
    background-color:#161616;
    border-radius: 10% 0% 0% 10% / 40% 0% 0% 40% ;
`;

const Form = styled.form`
    width: 40%;
    float: right;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.h2`
    color: white;
    position: relative;
    top: -20px;
    left: 30%;
`;

const Name = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
`;

const Email = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
`;

const Password = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
`;

const Submit = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
    background-color: #EE8C3A;
    cursor: pointer;
`;

const ErrorMessage = styled.p`
    color: white;
`;

const RegisterStyle = styled.div`
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

const schema = yup.object({
    name: yup.string().max(50).required(),
    email: yup.string().email().max(50).required(),
    password: yup.string().min(4).max(20).required(),
}).required();

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);

    return (
        <RegisterContent>

            <RegisterStyle>
                <Logo/>
                {/* <İcon className="fa-2xl fa-solid fa-angles-down"></İcon>  */}
                <İcon className="fa-xl fa-solid fa-diagram-project"></İcon>
                <h2>Bize Katıl</h2>
                <h2>Geleceğe Adım At</h2>
                <h3>Projelerini adım adım takip et, kısa sürede çok iş başar!</h3>
            </RegisterStyle>

            <RegisterForm>
                <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off' > 
                    <Title>Register</Title>
                    <Name {...register('name')} placeholder='name' />
                    <ErrorMessage>{errors.firstName?.message}</ErrorMessage>

                    <Email {...register('email')} placeholder='email' />
                    <ErrorMessage>{errors.age?.message}</ErrorMessage>

                    <Password {...register('password')} type='password' placeholder='password' />
                    <ErrorMessage>{errors.age?.message}</ErrorMessage>

                    <Submit type="submit" value='Register'/>
                </Form>
            </RegisterForm>

        </RegisterContent>
    );
};

export default Register;
