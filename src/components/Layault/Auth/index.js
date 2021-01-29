import React from 'react';
import PropTypes from 'prop-types';


import { Wrraper,Content } from './styles';

function AuthLayoult({ children }) {
  return <Wrraper>
          <Content>
            {children}
          </Content>
        </Wrraper>;
}

export default AuthLayoult;

AuthLayoult.propTypes = {
    children: PropTypes.element.isRequired,
}