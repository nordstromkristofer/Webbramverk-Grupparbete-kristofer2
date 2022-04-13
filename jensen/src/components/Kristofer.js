import React from 'react';
import { SkolaList } from '../components/SkolaList';
import { AddSkola } from './AddSkola';
import { GlobalProvider } from "../components/context/GlobalState"

import './Kristofer.css'

function Kristofer() {
  return (
    <GlobalProvider>
    
    <br></br><br></br><br></br>
      <div className="container">
        <br></br><br></br><br></br>
        <a href ='/kristofer/login'>Logga in</a>
        <SkolaList />

        
      </div>
    </GlobalProvider>
  );
}

export default Kristofer;
