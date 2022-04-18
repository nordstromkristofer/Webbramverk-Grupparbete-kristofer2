import React, {useState, useContext} from 'react'
import { Context } from './context/StateProvider'

import './Kristofer.css'


export const AddSkola = () => {
  const [text, setText] = useState('');
  const [teacha, setTeacha] = useState('');
  const [ort, setOrt] = useState('');
  const [utb1, setUtb1] = useState('');
  const [utb2, setUtb2] = useState('');
  const [utb3, setUtb3] = useState('');


  const { addSkola } = useContext(Context);

  const onSubmit = e => {
    e.preventDefault();

    const newSkola = {
      text,
      teacha,
      ort,
      utb1,
      utb2,
      utb3
    }

    addSkola(newSkola);
  }

  return (
    <>
      <h3>Lägg till skola</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Lägg till skola här" />
        </div>
        <input type="text" value={teacha} onChange={(e) => setTeacha(e.target.value)} placeholder="Lägg till lärare här" />
        <input type="text" value={ort} onChange={(e) => setOrt(e.target.value)} placeholder="Lägg till ort här" />
        <input type="text" value={utb1} onChange={(e) => setUtb1(e.target.value)} placeholder="Lägg till kurs här" />
        <input type="text" value={utb2} onChange={(e) => setUtb2(e.target.value)} placeholder="Lägg till kurs här" />
        <input type="text" value={utb3} onChange={(e) => setUtb3(e.target.value)} placeholder="Lägg till kurs här" />
        <button className="addbtn">Lägg till</button>
      </form>
    </>
  )
}
