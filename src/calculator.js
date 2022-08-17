import { useRef, useState } from 'react';
import './style/css/calculator.css'

const onCalc = (active) =>{  
  active.current.classList.toggle('input-on')
}

const reverseNumber = (num) =>{  
  if (num!==''){
    let ind = Math.max.apply(null,[num.lastIndexOf('+'), num.lastIndexOf('-'), num.lastIndexOf('×'), num.lastIndexOf('/')])
    let buf= ind>1?num.slice(ind+1):ind
    let rez = ind>1?num.slice(0,ind+1):ind  
    if (num[buf]==='-' && ind===0){
      return num.slice(1)
    }
    if(ind===-1){
      return "-"+num
    }
    if(rez[rez.length-1]==="+"){
      
      return rez.slice(0,rez.length-1) +'-'+ buf
    }
    if(rez[rez.length-1]==="-"){
      if(rez[rez.length-2]==="/" || rez[rez.length-2]==="×"){
        return rez.slice(0,rez.length-1) + buf
      }
      return rez.slice(0,rez.length-1) +'+'+ buf
    }
    if((rez[rez.length-1]==="/" || rez[rez.length-1]==="×")&&buf.length>0 ){
      return rez +'-'+ buf
    }
    return num
  }
  return ''
}

const checkSymbal = (string, symbal) =>{
  return string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'|| string.length===0?string:string+symbal
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
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >0</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >00</span>
      <span onClick={(e)=>calc?setInput(input+e.target.innerHTML):null} className='key-number' >.</span>
      <span className='key-equal'>=</span>      
    </div>
   </div>
  );
}

export default App;
