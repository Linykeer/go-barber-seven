import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import AuthLayoult from '../components/Layault/Auth';
import DefaultLayoult from '../components/Layault/Default';

export default function RoutePrivate({
component: Component,
isPrivate,
...rest
}) {
   const user = false;

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