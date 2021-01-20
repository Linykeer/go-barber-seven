import React from 'react';
import PropTypes from 'prop-types';


import { Wrraper } from './styles';

function DefaultLayoult({ children }) {
  return <Wrraper>{children}</Wrraper>;
}

export default DefaultLayoult;

DefaultLayoult.propTypes = {
    children: PropTypes.element.isRequired,
}