import React from 'react';
import { SkolaList } from '../components/SkolaList';
import { AddSkola } from './AddSkola';
import { Provider } from "../components/context/StateProvider"

import './Kristofer.css'

function Kristofer() {
  return (
    <Provider>
    
    <br></br><br></br><br></br>
      <div className="container">
        <br></br><br></br><br></br>
        <a href ='/kristofer/login'>Logga in</a>
        <SkolaList />

        
      </div>
    </Provider>
  );
}

export default Kristofer;
