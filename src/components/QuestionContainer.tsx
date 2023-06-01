import { useEffect, useRef, useState } from "react";
import "./styles/QuestionContainer.css";
import { ApiUrl } from "../MyGlobals";
import { Question } from "../MyGlobals";
import QuestionPrompt from "./QuestionPrompt";

const QuestionContainer = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const questionFetched = useRef(false);

  useEffect(() => {
    if (questionFetched.current) return;
    questionFetched.current = true;
    fetch(ApiUrl)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="QuestionContainer">
      <h3>Best GK Quiz in the Market.</h3>
      {questions.length === 0 ? (
        <h3>No data found! May be offline!</h3>
      ) : (
        questions.map((q, i) => (
          <QuestionPrompt key={q.id} {...q} index={i + 1} />
        ))
      )}
    </div>
  );
};

export default QuestionContainer;
