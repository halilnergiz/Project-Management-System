/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginLogo from '../assets/login-logo.png';
import { Form, TextInput, ErrorMessage, Submit, NavButton, RequestError } from '../styled-components/Reusable-Components';
import axios from 'axios';
import { API } from '../Theme';
import { observer } from 'mobx-react';

const RegisterContent = styled.div`
    height: 100%;
    width: 100%;
    display:flex ;
    flex-direction: row;
    justify-content: center;
    position: relative;
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
`;

const FormRegister = styled(Form)`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: white;
    user-select: none;
`;

const TextInputRegister = styled(TextInput)`
    height: 25px;
    width: 100%;
`;

const SubmitRegister = styled(Submit)`
    background-color: white;
    width: 103%;
`;

// const RequestError = styled.span`
//     color: white;
//     margin-top: 10%;
// `;

const ComeLogin = styled(NavButton)`
    margin-top: 4rem;
    background-color: #EE8C3A;
`;
/* Left Side */
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



const schema = yup.object({
    name: yup.string().max(50).required(),
    email: yup.string().email().max(50).required(),
    password: yup.string().min(4).max(20).required(),
}).required();


const Register = observer(({ store }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const checkRegister = (data) => {
        console.log(data);
        axios.post(`${API}/auth/register`, {
            email: data.email,
            name: data.name,
            password: data.password
        })
        .then(response => {
            console.log(response);
            store.registerInfMessage = 'Account Successfully Created!';
        })
        .catch(err => {
            console.log(err);
            console.log(err.response.data.errors[0]);
            store.registerInfMessage = `Error: ${err.response.data.errors[0]} error!`;
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
                    <TextInputRegister {...register('name')} placeholder='name' />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <TextInputRegister {...register('email')} placeholder='email' />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <TextInputRegister {...register('password')} type='password' placeholder='password' />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <SubmitRegister type="submit" value='Register' />

                    <RequestError>{store.registerInfMessage}</RequestError> 
                </FormRegister>

                <ComeLogin to={'/'} onClick={()=> store.registerInfMessage=''}>Back To Login</ComeLogin>

            </RegisterFormContent>



        </RegisterContent>
    );
});

export default Register;