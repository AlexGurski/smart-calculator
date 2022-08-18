import { useRef, useState } from 'react';
import  {checkDoth, checkDoubleZero, checkSymbal, checkZero, reverseNumber} from '../module/calculatorModule'
import '../style/css/calculator.css'

const onCalc = (active) =>{  
  active.current.classList.toggle('input-on')
}

const App = ()=> {
  const inputs = useRef();
  const [calc,setCalc] = useState(false)
  const [input,setInput] = useState("")

  return (
   <div className="calculator">
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
      <span onClick={(e)=>calc?setInput(checkZero(input)):null} className='key-number' >0</span>
      <span onClick={(e)=>calc?setInput(checkDoubleZero(input)):null} className='key-number' >00</span>
      <span onClick={(e)=>calc?setInput(checkDoth(input)):null} className='key-number' >.</span>
      <span className='key-equal'>=</span>      
    </div>
   </div>
  );
}

export default App;
