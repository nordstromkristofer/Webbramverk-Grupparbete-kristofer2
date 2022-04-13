import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Kristofer.css'

function Loggain() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate()
  
    // User Login info
    const database = [
      {
        username: "Olof",
        password: "Olofsson"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
     
      <div className="form">
           <br></br> <br></br> <br></br> <br></br>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <br></br> <br></br> <br></br> <br></br>
          <div className="button">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
              <br></br> <br></br> <br></br> <br></br>
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? navigate('/kristofer/admin') : renderForm}
        </div>
      </div>
    );
  }

  export default Loggain