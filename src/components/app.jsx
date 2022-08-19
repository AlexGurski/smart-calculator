import { useState } from 'react';
import { Calculator } from './calculator';
import Hangman from './hangman'
import '../style/css/hangman.css'

const App = ()=> {  
  const [calculation, setCalculation]=useState(false)
  return (   
    calculation===false || calculation===""?
    <Calculator calulatorResult={(e)=>{return setCalculation(e)}}/>
   :   
    <Hangman result={calculation}/>
  );
}

export default App;
