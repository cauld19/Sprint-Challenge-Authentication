import React from 'react';

import Login from './Login';
import Register from './Register';

export const Authorization = props => {



  return ( <>
    <div className="login-signup-page-div">
        <Login history={props.history} />
        <Register />
    </div>
  </> );
};