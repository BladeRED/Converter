//import Button from 'react-bootstrap/Button'; //
import '../styles/Converter.css'
import { useState } from 'react'


function Converter() { 


  let patate = 0.2;

  let [nbPotatoes, setInputNbPotatoes] = useState("");
  let [nbMeters, setInputNbMeters] = useState("");
  

  let convertPotatoes = (patate * nbPotatoes).toFixed(2)
  let convertMeters = (patate * nbMeters).toFixed(2)
    
    return (
        <div className="container my-5 text-center">
          <h3 className="text-center"> Conversion de patates en mètre</h3>
          

          <p className="text-center">Patates en mètres :</p>
          <input type="number" className="numberConvert text-center" min="1" step="1" onChange={(event) => setInputNbPotatoes(event.target.value)}></input>
          <p> Il faut {nbPotatoes} patates pour faire {convertPotatoes} m</p>

          <p className="text-center">Mètres en patates :</p>
          <input type="number" className="numberConvert text-center" min="1" step="1" onChange={(event) => setInputNbMeters(event.target.value)}></input>
          <p> {nbMeters} patates représente une distance d'environ {convertMeters} m</p>
         
        </div>
      );



}

export default Converter