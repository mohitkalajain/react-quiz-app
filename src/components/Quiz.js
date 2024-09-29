import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
   console.log("Context",quizState);

  return (
    <div className="Quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>You've got 4 of {quizState.questions.index}</div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

// const Quiz = () => {
//   const [questionState,setQuestionState]=useState({
//     currentQuestionIndex:0,
//     questions:[]
//   });

//   const textClick=()=>{
//     setQuestionState({...questionState,
//       currentQuestionIndex:questionState.currentQuestionIndex+1
//     });
//   }

//   return (
//     <div className="Quiz">
//       <div>
//         <div className="score">Question 1/8</div>
//         <Question />
//         <div className="next-button" onClick={textClick}> Next Question {questionState.currentQuestionIndex}</div>
//       </div>
//     </div>
//   );
// };
