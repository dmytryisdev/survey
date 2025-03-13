import type QuestionModel from '~/models/Question';

export default class AnswerModel {
  id: string;
  text: string;
  nextQuestion: QuestionModel | null;
  next_question?: QuestionModel | null;
  question?: number | null;

  constructor(data: Partial<AnswerModel> = {}) {
      this.id = data.id || '';
      this.text = data.text || '';
      this.question = data.question || null;
      this.next_question = data.next_question || null;
      this.nextQuestion = data.nextQuestion || null;
  }
}
