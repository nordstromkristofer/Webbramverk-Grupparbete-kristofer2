import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './LoggaIn.css'


function Loggain() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate()
  
   

    // Hårdkodade användarnamn och lösenord här:
    const database = [
      {
        username: "Olof",
        password: "Olofsson"
      },
      {
        username: "Reidar",
        password: "Reidarsson"
      }
    ];
    

    // Felmeddelanden
    const errors = {
      uname: "Hittar inget med det namnet",
      pass: "Fel lösen!"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Jämförande av användarinfo
      if (userData) {
        if (userData.password !== pass.value) {
         // Fel lösenord - meddelande
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Användaren hittas inte-meddelande
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // JSX-kod för felmeddelande
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    //Loginformulär
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
          <button className="btn">Logga in</button>
        </form>
      </div>
    );
  
    return (
      <div className="container">
              <br></br> <br></br> <br></br> <br></br>
        <div className="login-form">
          {isSubmitted ? navigate('/kristofer/admin') : renderForm}
        </div>
      </div>
    );
  }

  export default Loggain