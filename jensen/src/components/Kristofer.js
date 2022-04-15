import React from 'react';
import { SkolaList } from '../components/SkolaList';
import { Provider } from "../components/context/StateProvider"

import './Kristofer.css'

function Kristofer() {
  return (
    <Provider>
    

    <div className="headertext">
      <a href ='/kristofer/login'>Logga in för att lägga till/ta bort skola</a>
      </div>
      <br></br><br></br><br></br>
      <div className="container">
        

        <br></br><br></br><br></br>
        
        <SkolaList />
      </div>
    </Provider>
  );
}

export default Kristofer;
