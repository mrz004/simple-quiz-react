import { useRef, useState } from "react";
import { Question } from "../MyGlobals";
import "./styles/QuestionPrompt.scss";

const QuestionPrompt = ({
  question,
  index,
  correctAnswer,
  incorrectAnswers,
}: Question) => {
  const handleClick = (currText: string) => {
    if (userClicked) return;
    setUserClicked(true);
    selectedOption.current = currText;
  };
  const [userClicked, setUserClicked] = useState<boolean>(false);
  const selectedOption = useRef<string>("");
  const options = useRef<string[]>([]);
  const opNames = ["a", "b", "c", "d"];
  if (options.current.length === 0) {
    options.current = [...incorrectAnswers];
    options.current.push(correctAnswer);
    for (let i = 0; i < Math.ceil(Math.random() * 4); i++)
      options.current.push(options.current.shift() || "null");
  }
  return (
    <div className="QuestionPrompt">
      <p>
        {index}. {question.text}
      </p>
      <div className="options">
        {options.current.map((option, i) => (
          <span
            onClick={() => handleClick(option)}
            key={i}
            style={
              userClicked
                ? option === selectedOption.current
                  ? option === correctAnswer
                    ? { background: "#afa", animation: "0.7s ease correctAns" }
                    : { background: "#ffcfcf", animation: "0.5s ease wrongAns" }
                  : option === correctAnswer
                  ? { background: "#afa" }
                  : {}
                : {}
            }
          >
            {opNames[i]}) {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuestionPrompt;
