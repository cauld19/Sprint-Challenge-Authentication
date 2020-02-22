import React, {useState, useEffect} from "react";
import axios from "axios";

import useLocalStorage from "./useLocalStorage";
import { axiosWithAuth } from "./axiosWithAuth";




const initialState = {
  username: "",
  password: ""
};



const Login = props => {

    const [ credentials, setCredentials ] = useState(initialState);
    const [ error, setError ] = useState(false);
    // const [loggedInUser, setLoggedInUser ] = useLocalStorage('name', '');


    const resetField = () => {
      setCredentials(initialState);
    }
  


    const handleSubmit = e => {
      e.preventDefault();
      axios
          .post("http://localhost:3300/api/auth/login", credentials)
          .then(res => {
            console.log(res)
              resetField();
            //   setLoggedInUser(JSON.parse(res.config.data).username);
              setError(false);
              localStorage.setItem("token", res.data.token);
              props.history.push("/jokes");
                    
          })
          .catch(err => {
            console.log(err)
            setError(true)
          })
  }
 

  
  


    return (
      <div>
        <h2>
          Login
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
            <div className="form-container-grid">
              <label htmlFor="username-login">
                username:
              </label>
                <input
                  id="username-login"
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={e => setCredentials({...credentials, username: e.target.value})}
                />
              
            </div>
            <div className="form-container-grid">
              <label htmlFor="password-login">
                password:
              </label>
                <input
                  id="password-login"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={e => setCredentials({...credentials, password: e.target.value})}
                />
    
            </div>
            <button>Login</button>
          </form>
          {error ? <div className="error-message">
                <p>Username or password is incorrect.</p>
          </div> : null }
        </div>
      </div>
    );
};
  
export default Login;