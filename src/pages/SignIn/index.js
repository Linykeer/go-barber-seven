import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



import logo from '../../assets/logo.svg';
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup';
import {signInRequest } from '../../store/modules/auth/actions'

import { Link } from 'react-router-dom';


const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail valido').required('O e-mail é obrigatorio'),
  password: Yup.string().min(6, 'minimo 6 caracteres').required('A senha é obrigatoria'),   
 })

function SignIn() {
   const dispacth = useDispatch();
   const loading = useSelector(state => state.auth.loading)

    function handleSubmit({email, password}) {
      dispacth(signInRequest(email, password))
    }

  return (
    <>
      <img src={logo} alt="GoBarber"/>

      <Form schema={schema} onSubmit={handleSubmit}>
         <Input name="email" type="email" placeholder="Seu e-mail"/>
         <Input name="password" type="password" placeholder="Sua senha"/>

         <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
         <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  )
}

export default SignIn;