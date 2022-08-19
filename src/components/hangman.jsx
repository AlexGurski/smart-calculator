
import '../style/css/hangman.css'

const Hangman = ({result})=> {  
  return (   
   <div className='container hangman'>
      <div className='hangman_canvas'>
      </div>
      <div className='hangman_quiz'>
            <div className='hangman_quiz_input'>
            { result.split('').map((sym,ind)=><span className='hangman_quiz_input_symbal' key={ind}>{sym}</span>)}
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

export default Hangman;
