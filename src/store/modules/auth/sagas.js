import { takeLatest, call, all, put } from 'redux-saga/effects'
import api from '../../../services/api';
import history from '../../../services/history';
import {signInSucess, signFailure, signUpRequest} from '../auth/actions';
import { toast } from 'react-toastify';


export function* signIn({payload}){
    
 try {
    const { email, password } = payload;
    const response  = yield call(api.post, 'sessions', {email, password})
    const {token, user} = response.data;

    if (!user.provider) {
        toast.error('usuario não é prestador');
        return;
    }
 
    api.defaults.headers['Authorization'] = `Bearer ${token}`


  yield put(signInSucess(token, user))
  history.push('/home')
} catch {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure())
}
 }
export function* signUp({payload}) {
    try{
        const { name, email, password } = payload;
         yield call(api.post, 'users', {
             name,
             email,
             password,
             provider: true,
         });
         toast.success('Cadastro efetuato com sucesso!')
         history.push('/')
    } catch{
         toast.error('Falha no Cadastro, verifique seus dados!')
         yield put(signUpRequest());
    }
}
export function setToken({payload}) {
    if (!payload) return;
    const {token} = payload.auth;

    if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),

    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp)
])