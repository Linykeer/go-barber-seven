import React from 'react';
import logo from '../../assets/logo.svg';
import {Form, Input} from '@rocketseat/unform'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions'

import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string().email('Insira um e-mail valido').required('O e-mail é obrigatorio'),
  password: Yup.string().min(6, 'minimo 6 caracteres').required('A senha é obrigatoria'),   
 })

function SignUp() {
   const dispacth = useDispatch();

  function handleSubmit({name, email, password}) {
     dispacth(signUpRequest(name, email, password))
  }
  return (
    <>
      <img src={logo} alt="GoBarber"/>

      <Form schema={schema} onSubmit={handleSubmit}>
         <Input name="name" placeholder="Nome completo"/>
         <Input name="email" type="email" placeholder="Seu e-mail"/>
         <Input  name="password" type="password" placeholder="Sua senha"/>

         <button type="submit">Criar conta</button>
         <Link to="/">Já tenho login</Link>
      </Form>
    </>
  )
}

export default SignUp;