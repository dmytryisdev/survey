import QuestionModel from "~/models/Question";
import AnswerModel from "~/models/Answer";

const createBaseQuestion = (id: number): QuestionModel => {
  return new QuestionModel({
    id: id.toString(),
    text: `Вопрос ${id}: Как часто вы пользуетесь нашим продуктом?`,
    answers: [
      new AnswerModel({ id: `${id}1`, text: 'Ежедневно', nextQuestion: null }),
      new AnswerModel({ id: `${id}2`, text: 'Несколько раз в неделю', nextQuestion: null }),
      new AnswerModel({ id: `${id}3`, text: 'Редко', nextQuestion: null }),
    ],
  });
};

export const fetchLogicQuestions = (): Promise<QuestionModel[]> => {
  const questions: QuestionModel[] = [];

  for (let i = 1; i <= 5; i++) {
    questions.push(createBaseQuestion(i));
  }

  questions.forEach((question, index) => {
    const nextIndex = (index + 1) % questions.length;
    const nextQuestion = questions[nextIndex];

    question.answers[0].nextQuestion = index % 2 === 0 ? nextQuestion : null;
  });

  return new Promise(resolve => {
    setTimeout(() => resolve(questions), 500);
  });
};