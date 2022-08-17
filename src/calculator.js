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
  if (string[string.length-1]===".") return string+"0"+symbal
  return string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'|| string.length===0?string:string+symbal
}

const checkDoubleZero = (string) =>{
  if ((string[string.length-1]==0) && (string[string.length-2]==undefined || string[string.length-2]==='+' || string[string.length-2]==='-'|| string[string.length-2]==='/'|| string[string.length-2]==='×')){ 
    return string
  }
  if (string[string.length-1]==undefined){
    return "0"
  }
  if (string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'){
    return string+"0"
  }
  return string+"00"
}
const checkZero = (string) =>{
  if ((string[string.length-1]==0) && (string[string.length-2]==undefined || string[string.length-2]==='+' || string[string.length-2]==='-'|| string[string.length-2]==='/'|| string[string.length-2]==='×')){ 
    return string
  }
  return string+"0"
}
const checkDoth = (string) => {
  if (string[string.length-1]==undefined || string[string.length-1]==='+' || string[string.length-1]==='-'|| string[string.length-1]==='/'|| string[string.length-1]==='×'){ 
    return string+"0."
  }
  //тут написать обработчик для того что бы в числе не было двух точек
 return string+'.'
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
