import React from 'react';
import { SkolaList2 } from './SkolaList2';
import { AddSkola } from './AddSkola';
import { Provider } from "./context/StateProvider"

import './SkolaPrivate.css'

function SkolaPrivate() {
  return (
    <Provider>
   
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <div className="ulog">
      <a href ='/kristofer'>Logga ut</a>
      <br></br><br></br><br></br>
      </div>
      <AddSkola />
      <div className="container2">
        <br></br><br></br><br></br>
     
        <SkolaList2 />
   
        
      </div>
    </Provider>
  );
}

export default SkolaPrivate;
