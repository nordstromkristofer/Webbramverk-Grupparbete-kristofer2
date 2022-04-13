import React from 'react';
import { SkolaList2 } from './SkolaList2';
import { AddSkola } from './AddSkola';
import { GlobalProvider } from "./context/GlobalState"

import './Kristofer.css'

function SkolaPrivate() {
  return (
    <GlobalProvider>
    

      <div className="container">
        <br></br><br></br><br></br>
        <a href ='/kristofer'>Logga ut</a>
        <SkolaList2 />
        <AddSkola />
        
      </div>
    </GlobalProvider>
  );
}

export default SkolaPrivate;
