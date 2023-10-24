
import { useState } from 'react';
import './App.css';

const questions = [
  {
    prompt: "what color is the sky?",
    correctAnswer: "blue",
    answers: ["brown", "white", "blue"],
  }
]


function App() {

  const [currentQuestionIndex, setCurrentQuestionndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <h1>{currentQuestion.prompt}</h1>

      {selectedAnswer}

      <form onSubmit={(e) => {
        e.preventDefault();

        // TODO did they get the right answer

        //TODO increment to the next question OR end the gamef they've finished all questions

      }}
      >
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

        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
