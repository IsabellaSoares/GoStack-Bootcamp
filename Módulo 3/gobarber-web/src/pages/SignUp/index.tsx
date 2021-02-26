import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input type='text' icon={FiUser} name='Name' placeholder='Nome' />
        <Input type='email' icon={FiMail} name='Email' placeholder='E-mail' />
        <Input type='password' icon={FiLock} name='Password' placeholder='Senha' />

        <Button type='submit'>Cadastrar</Button>
      </form>

      <a href=''>
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
