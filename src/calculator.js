import { useRef, useState } from 'react';
import './style/css/calculator.css'

const onCalc = (active) =>{  
  active.current.classList.toggle('input-on')
}

const reverseNumber = (num) =>{  
  let ind = Math.max.apply(null,[num.lastIndexOf('+'), num.lastIndexOf('-'), num.lastIndexOf('×'), num.lastIndexOf('/')])
  let buf= ind>1?num.slice(ind+1):ind
  let rez = ind>1?num.slice(0,ind+1):ind
console.log(buf.length)
console.log(rez)
return buf>0?`${rez}-${buf}`:-num
}

const App = ()=> {
  const ref = useRef();
  const [calc,setCalc] = useState(false)
  const [input,setInput] = useState("")

  return (
   <div className="calculator">
    <div className='calculator_title'>
      <span>SUPER SMART CALCULATOR</span>
      <span>Alexandr Gurski</span>
    </div>
    <div className='calculator_input' ref={ref}>{input}</div>
    <div className='calculator_keyboard'>
      <span onClick={()=>
        {onCalc(ref)
         setCalc(!calc)
         setInput('')
        }} className='key-on'>ON</span>
      <span onClick={()=>setInput(input.slice(0,-1))} >←</span>
      <span onClick={()=>setInput(reverseNumber(input))}>+/-</span> 
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null}>×</span>         
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number'>1</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number'>2</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >3</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null}>/</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >4</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >5</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >6</span>      
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null}>-</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >7</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >8</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >9</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null}>+</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >0</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >00</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >.</span>
      <span className='key-equal'>=</span>      
    </div>
   </div>
  );
}

export default App;
