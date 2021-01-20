import React from 'react';
import PropTypes from 'prop-types';


import { Wrraper } from './styles';

function AuthLayoult({ children }) {
  return <Wrraper>{children}</Wrraper>;
}

export default AuthLayoult;

AuthLayoult.propTypes = {
    children: PropTypes.element.isRequired,
}