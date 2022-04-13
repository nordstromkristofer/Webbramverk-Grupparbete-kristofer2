
import React,{useState} from 'react';
import './InfoB.css';
import UtbList from './UtbList/UtbList';
import NewUtb from './NewUtb/NewUtb';

const InfoB = ()=>{
const [utbNames, setUtbNames]= useState([

    {id: 'utb1', text: 'Frontendutvecklare inriktning webbsäkerhet'},
    {id: 'utb1', text: 'AI Developer'},
    {id: 'utb1', text: 'Cloud Amazon webbservice'},
    {id: 'utb1', text: 'Teknisk testare'},
]);

const addNewUtbHandler = newUtb =>{
    setUtbNames((preUtbNames)=>{
    return preUtbNames.concat(newUtb);
    });

};


return(
    <div className="kurs-app">
    <h1 title="Jensen YH">Välkommen,<span> Ansökan</span> till Jensens utbildiningar!</h1>
    <h2>Utbildiningar Info</h2>
    <h3>(Ny utbildning: IT 💻 & music ♩♪♫♬♭♮♯ & eating broadcasting 🍣🍳🍔🍟!)</h3>
    <NewUtb  onAddUtb ={addNewUtbHandler}/>
    <UtbList utbs ={utbNames}/>
    </div>
)
}






export default InfoB;









