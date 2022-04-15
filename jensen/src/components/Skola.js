import React, {useContext} from 'react';
import { Context } from './context/StateProvider'

export const Skola = ({ skola }) => {
  return (
    <li className={skola.text}>
      <div className="skolaname">{skola.text}</div>
      <br></br><br></br>
      Lärare: {skola.teacha} 
      <br></br><br></br>
      Ort: {skola.ort} 
      <br></br><br></br>
      Kurser:
      <br></br><br></br>
       {skola.utb1}
      <br></br><br></br>
       {skola.utb2}
       <br></br><br></br>
       {skola.utb3}
    </li>
  )
}

export const SkolaInLog = ({ skola }) => {
  const { deleteSkola } = useContext(Context);

  return (
    <li className="skolatext1">
      Skola:{skola.text}
      <br></br><br></br>
      Lärare: {skola.teacha} 
      <br></br><br></br>
      Ort: {skola.ort} 
      <br></br><br></br>
      Kurser:
      <br></br><br></br>
       {skola.utb1}
      <br></br><br></br>
       {skola.utb2}
       <br></br><br></br>
       {skola.utb3}
      <button onClick={() => deleteSkola(skola._id)} className="delete-btn">x</button><br></br>
    </li>
  )
}
