import { useEffect, useRef, useState } from 'react'
import '../style/css/hangman.css'

const buttonClick = (element, string) =>{
  let rez=[]
  for (let i=0;i<string.length;i++){
    rez.push(string[i]===element.innerHTML)
  }
  element.classList.add('hangman_closed')
  return rez;
}

const showTheNumber = (answer, HTMLelement, array) =>{
  let rez = 0;
  for (let i=0; i<answer.length;i++){
    if (answer[i]){
      HTMLelement[i].innerHTML=array[i]
      HTMLelement[i].classList.add('hangman_predicted')
      rez++
    }
  }
  return rez
}

const Hangman = ({result})=> {
  
  const [rightToMistake, setRightToMistake] = useState(5)
  const [rightAnswer, setRightAnswer] = useState(0)
  const [answer, setAnswer] = useState([])
  const quizList = useRef()
  const buttons = useRef()
  const hangmanPerson = useRef()
  const dead = useRef()

  useEffect(()=>{
    let sum = answer.length>0?showTheNumber(answer, quizList.current.children, result):null
    if (sum!==0){
      setRightAnswer(rightAnswer+sum)
    }else{
      setRightToMistake(rightToMistake-1)
    }
  },[answer])

  useEffect(()=>{ 
    hangmanPerson.current.classList.add("hangman_procces"+rightToMistake)
   
    if (rightToMistake===0){
      dead.current.style.opacity=1;   
      dead.current.classList.add('hangman_dead')
      buttons.current.classList.add('hangman_finish')
    }
  },[rightToMistake])

  useEffect(()=>{
    if (result.join('')==="division by zero"){
      setRightToMistake(0);
      showTheNumber([true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true ],quizList.current.children, result)
    }
    if (result.length === rightAnswer){
      dead.current.style.opacity=1; 
      dead.current.classList.add('hangman_kind')
      buttons.current.classList.add('hangman_finish')
    }
  },[rightAnswer])

  return (       
   <div className='container hangman'>
      <div className='hangman_canvas'>
        <div className='hangman_canvas_container' ref={hangmanPerson}>
        </div>
      </div>
      <div className='hangman_quiz'>
            <div className='hangman_quiz_input' ref={quizList}>
             { result.map((sym,ind)=><span className='hangman_quiz_input_symbal' key={ind}>Х</span>)}
            </div>
            <div className='hangman_quiz_buttons' ref={buttons}>
              <div className='hangman_quiz_buttons_container'>                
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>1</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>2</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>3</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>4</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>5</span>  
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>6</span>              
              </div>
              <div className='hangman_quiz_buttons_container'>               
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>7</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>8</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>9</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>0</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element'>.</span>
                <span onClick={(e)=>{setAnswer(buttonClick(e.target,result))}} className='hangman_quiz_buttons_element '>-</span>
              </div>
            </div>
            <div className='hangman_final' ref={dead}> NEW CALCULATION</div>             
      </div>
       
   </div>  
  );
}

export default Hangman;
