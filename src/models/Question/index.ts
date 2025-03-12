import type AnswerModel from "~/models/Answer";

export default class QuestionModel {
  id: string;
  poll: number;
  text: string;
  answers: AnswerModel[];
  from_answers: AnswerModel[];
  subquestion: QuestionModel | null;

  constructor(data: Partial<QuestionModel> = {}) {
      this.id = data.id || '';
      this.poll = data.poll || -1;
      this.text = data.text || '';
      this.answers = data.answers || [];
      this.from_answers = data.from_answers || [];
      this.subquestion = data.subquestion || null;
  }

  static fromApi(data: any): QuestionModel {
      return new QuestionModel({
          id: data.id,
          poll: data.poll,
          text: data.text,
          answers: data.answers?.map((answer: AnswerModel) => ({
              id: answer.id,
              text: answer.text,
              nextQuestion: answer.nextQuestion
          })) || [],
        from_answers: data.from_answers?.map((answer: AnswerModel) => ({
          id: answer.id,
          text: answer.text,
          nextQuestion: answer.nextQuestion
        })) || []
      });
  }
}
