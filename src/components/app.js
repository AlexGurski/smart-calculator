import { useEffect, useRef, useState } from 'react';
import  {checkDoth, checkDoubleZero, checkSymbal, checkZero, reverseNumber} from '../module/calculatorModule'
import { calculating } from '../module/calculation';
import '../style/css/calculator.css'
import '../style/css/hangman.css'

const onCalc = (active) =>{  
  active.current.classList.toggle('input-on')
}

const App = ()=> {
  const inputs = useRef();
  const [calc,setCalc] = useState(false)
  const [input,setInput] = useState("")
  const [calculation, setCalculation]=useState(false)

  useEffect(()=>{
    console.log(calculation)
  },[calculation])

  return (   
    calculation===false || calculation===""?
    <div className="calculator container">
    <div className='calculator_title'>
      <span>SUPER SMART CALCULATOR</span>
      <span>Alexandr Gurski</span>
    </div>
    <div className='calculator_input' ref={inputs}>{input}</div>
    <div className='calculator_keyboard'>
      <span 
        onClick={()=>
          {
          onCalc(inputs)
          setCalc(!calc)
          setInput('')
          }} 
          className='key-on'>
          {!calc?'ON':'OFF'}
      </span>
      <span onClick={()=>setInput(input.slice(0,-1))} >←</span>
      <span onClick={()=>setInput(reverseNumber(input))}>+/-</span> 
      <span onClick={(e)=>calc?setInput(checkSymbal(input,e.target.innerHTML)):null}>×</span>         
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number'>1</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number'>2</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >3</span>
      <span onClick={(e)=>calc?setInput(checkSymbal(input,e.target.innerHTML)):null}>/</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >4</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >5</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >6</span>      
      <span onClick={(e)=>calc?setInput(checkSymbal(input,e.target.innerHTML)):null}>-</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >7</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >8</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >9</span>
      <span onClick={(e)=>calc?setInput(checkSymbal(input,e.target.innerHTML)):null}>+</span>
      <span onClick={()=>calc?setInput(checkZero(input)):null} className='key-number' >0</span>
      <span onClick={()=>calc?setInput(checkDoubleZero(input)):null} className='key-number' >00</span>
      <span onClick={()=>calc?setInput(checkDoth(input)):null} className='key-number' >.</span>
      <span onClick={()=>calc?setCalculation(calculating(input)):null}className='key-equal'>=</span>      
    </div>
   </div>
   :
   <div className='container hangman'>
      <div className='hangman_canvas'>
      </div>
      <div className='hangman_quiz'>
            <div className='hangman_quiz_input'>
            { calculation.split('').map((sym,ind)=><span className='hangman_quiz_input_symbal' key={ind}>{sym}</span>)}
            </div>
            <div className='hangman_quiz_buttons'>
              <div className='hangman_quiz_buttons_container'>
                <span className='hangman_quiz_buttons_element'>0</span>
                <span className='hangman_quiz_buttons_element'>1</span>
                <span className='hangman_quiz_buttons_element'>2</span>
                <span className='hangman_quiz_buttons_element'>3</span>
                <span className='hangman_quiz_buttons_element'>4</span>
                <span className='hangman_quiz_buttons_element'>5</span>                
              </div>
              <div className='hangman_quiz_buttons_container'>
                <span className='hangman_quiz_buttons_element'>6</span>
                <span className='hangman_quiz_buttons_element'>7</span>
                <span className='hangman_quiz_buttons_element'>8</span>
                <span className='hangman_quiz_buttons_element'>9</span>
                <span className='hangman_quiz_buttons_element'>.</span>
                <span className='hangman_quiz_buttons_element'>-</span>
              </div>
            </div>          
      </div>
    
   </div>
   

  );
}

export default App;
