import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import AuthLayoult from '../components/Layault/Auth';
import DefaultLayoult from '../components/Layault/Default';

import { store } from '../store';

export default function RoutePrivate({
component: Component,
isPrivate,
...rest
}) {
   const { user } = store.getState().auth;

   if(!user && isPrivate) {
       return <Redirect to="/" />
   }

   if(user && !isPrivate) {
       return <Redirect to="/home" />
   }

   const Layout = user ? DefaultLayoult : AuthLayoult;



   return (
       <Route  
        {...rest} 
        render={props => (
           <Layout>
               <Component {...props}/>
           </Layout>
       )}
       />
   )
}

RoutePrivate.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}
RoutePrivate.defaultProps = {
    isPrivate: false,
}