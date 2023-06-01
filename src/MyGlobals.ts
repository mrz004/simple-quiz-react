export const ApiUrl = "https://the-trivia-api.com/v2/questions";

export interface Question {
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  index?: number;
}
