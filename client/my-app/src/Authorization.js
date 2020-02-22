import React, {useState} from "react";
import axios from "axios";



const initialState = {
  username: "",
  password: ""
};

const Signup = () => {

    const [ signupCredentials, setSignupCredentials ] = useState(initialState)
    const [ error, setError ] = useState(false);
    const [ successSignup, setSuccessSignup] = useState(false);

    const resetField = () => {
      setSignupCredentials(initialState);
    }


    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post("https://localhost:3300/api/auth/register", signupCredentials)
            .then(res => {
              console.log(res);
              resetField();
              setError(false);
              setSuccessSignup(true);
            //   localStorage.setItem("id", res.data.user_id);
            //   localStorage.setItem("email", res.data.email);
            })
            .catch(err => {
              console.log(err);
              setError(true);
              setSuccessSignup(false);
            })
    }

    const handleChange = e => {
      setSignupCredentials({ ...signupCredentials, [e.target.name]: e.target.value });
    };
  

    return(
        <div className="login-container">
        <h2 className="header-login">
          Create Account
        </h2>
        <div className="login-form-main">
          <form onSubmit={handleSubmit}>
            <div className="form-container-grid">
              <label htmlFor="username-signup">
                username:
              </label>
                <input
                  id="username-signup"
                  type="text"
                  name="username"
                  value={signupCredentials.username}
                  onChange={handleChange}
                />
            </div>
            <div className="form-container-grid">
              <label htmlFor="password-signup">
                password:
              </label>
                <input
                  id="password-signup"
                  type="password"
                  name="password"
                  value={signupCredentials.password}
                  onChange={handleChange}
                />
            </div>
              <button>SignUp</button>
          </form>
          {error ? <div className="error-message">
                <p>Incorrect Signup. Please input a valid username, password, and email.</p>
          </div> : null }
          {successSignup ? <div className="error-message">
                <p>Successfull registration. Please Login above.</p>
          </div> : null }
        </div>

 

        </div>
    )
}

export default Signup;