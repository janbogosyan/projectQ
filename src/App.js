
import { useState } from 'react';
import './App.css';

const questions = [                             //масив от обекти с дължина 3 
  {
    prompt: "what color is the sky?",
    correctAnswer: "blue",
    answers: ["brown", "white", "blue"],
  },
  {
    prompt: "what color the sheep?",
    correctAnswer: "white",
    answers: ["black", "white", "orange"],
  },
  {
    prompt: "what monitor to buy?",
    correctAnswer: "asus",
    answers: ["zowie", "asus", "blue"],
  }
]
 // console.log(questions.length); 


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);      // ще вземем индекса на текущия въпрос
  const [score, setScore] = useState(0);                                    // резултата от отговорите
  const [selectedAnswer, setSelectedAnswer] = useState("");                 // селектирания отговор

  const isGameOver = currentQuestionIndex >= questions.length;              // играта свършва тогава когато текущия въпрос е >= на дължината въпроси(тоест няма повече въпроси)
  const currentQuestion = questions[currentQuestionIndex];                  // текущия въпрос ще е първия обект в масива с въпроси

  const numberOfQuestionsWrong = questions.length - score;                       // номера на въпросите ще е дължината на масива с въпроси минус точките 3 - 0
  const scoreScreen = <>Your Score {score} questions wrong  {numberOfQuestionsWrong}</>      // резултат  

  
  return (
    <div className="App">
      {isGameOver                                     // проверка първо дали играта е приключила (ще приключи след като свърши дължината на масива)
      ?
        <>
        {scoreScreen}                             
        <button 
        onClick={()=>{
          setCurrentQuestionIndex(0);
          setScore(0);
          setSelectedAnswer('')
        }}>Try Again</button>
        </>
        : <>
        {/* ако всичко е ок влизаме в играта и изписваме първия въпроса на индекс 0  */}
          <h1>{currentQuestion.prompt}</h1>           
      
          {/* {selectedAnswer} */}
        {/* след това в една форма правим следните неща */}
          <form 
          className='quiz-form'
          onSubmit={(e) => {
            e.preventDefault();

            if (selectedAnswer === currentQuestion.correctAnswer) {
              setScore(score + 1);
            }
            setCurrentQuestionIndex(currentQuestionIndex + 1)
          }}
          >
            {/* и така възможните отговори на въпросите за да изберем един от тях */}
            {/*The Label tag is necessary to showcase what the field represents on the form you are creating and ultimately displaying */}
            {/* след като натиснем бутона submit формата се изпраща и итерира показва следващия въпрос от масива */}
            {currentQuestion.answers.map((answer) => {
              return (
                <label key={answer}> 
                  <input
                    onChange={() => {
                      setSelectedAnswer(answer);
                    }}
                    type='radio'
                    name='answer'>
                  </input>
                  {answer}
                </label>
              );
            })}
            <button className='submit-btn'>Submit</button>
          </form>
        </>}
    </div>
  );
}

export default App;


