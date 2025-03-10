import QuestionModel from '~/models/Question';
import AnswerModel from '~/models/Answer';

export default class ConnectionModel {
  id: string;
  question: QuestionModel;
  answer: AnswerModel;
  nextQuestion: QuestionModel;

  constructor(data: Partial<ConnectionModel> = {}) {
    this.id = data.id ||'';
    this.question = data.question || new QuestionModel();
    this.answer = data.answer || new AnswerModel();
    this.nextQuestion = data.nextQuestion || new QuestionModel();
  }
}
