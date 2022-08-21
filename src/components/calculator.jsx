import { useEffect, useRef, useState } from 'react';
import  {checkDoth, checkDoubleZero, checkSymbal, checkZero, reverseNumber} from '../module/calculatorModule'
import { calculating } from '../module/calculation';
import '../style/css/calculator.css'



export const Calculator = ({calulatorResult})=> {  
  const inputs = useRef();
  const inputContainer = useRef();
  const [input,setInput] = useState("")

  return (   
    <div className="calculator container">
      <div className='calculator_title'>
        <span>SUPER SMART CALCULATOR</span>
        <span>Alexandr Gurski</span>
      </div>
      <div className='calculator_input' ref={inputs}>
        <div className='calculator_input_container' ref={inputContainer}>
          {input}
        </div>
        
      </div>
      <div className='calculator_keyboard'>
        <span 
          onClick={()=>{  setInput('')}}>
            AC
        </span>
        <span onClick={()=>setInput(input.slice(0,-1))} >←</span>
        <span onClick={()=>inputs.current.offsetWidth-13 > inputContainer.current.offsetWidth ?setInput(reverseNumber(input)):null}>+/-</span> 
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(checkSymbal(input,e.target.innerHTML)):null}>×</span>         
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number'>1</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number'>2</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >3</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(checkSymbal(input,e.target.innerHTML)):null}>/</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >4</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >5</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >6</span>      
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(checkSymbal(input,e.target.innerHTML)):null}>-</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >7</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >8</span>
        <span onClick={(e)=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(input+e.target.innerHTML):null} className='key-number' >9</span>
        <span onClick={(e)=>inputs.current.offsetWidth-35 > inputContainer.current.offsetWidth ?setInput(checkSymbal(input,e.target.innerHTML)):null}>+</span>
        <span onClick={()=>inputs.current.offsetWidth-38 > inputContainer.current.offsetWidth ?setInput(checkZero(input)):null} className='key-number' >0</span>
        <span onClick={()=>inputs.current.offsetWidth-72 > inputContainer.current.offsetWidth ?setInput(checkDoubleZero(input)):null} className='key-number' >00</span>
        <span onClick={()=>inputs.current.offsetWidth-50 > inputContainer.current.offsetWidth ?setInput(checkDoth(input)):null} className='key-number' >.</span>
        <span onClick={()=>calulatorResult(calculating(input))}className='key-equal'>=</span>      
      </div>
   </div>  
  );
}

