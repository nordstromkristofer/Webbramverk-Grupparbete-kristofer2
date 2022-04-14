import React from 'react';
import { SkolaList2 } from './SkolaList2';
import { AddSkola } from './AddSkola';
import { Provider } from "./context/StateProvider"

import './Kristofer.css'

function SkolaPrivate() {
  return (
    <Provider>
    

      <div className="container">
        <br></br><br></br><br></br>
        <a href ='/kristofer'>Logga ut</a>
        <SkolaList2 />
        <AddSkola />
        
      </div>
    </Provider>
  );
}

export default SkolaPrivate;
