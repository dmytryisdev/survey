import type AnswerModel from "~/models/Answer";

export default class QuestionModel {
  id: string;
  text: string;
  answers: AnswerModel[];

  constructor(data: Partial<QuestionModel> = {}) {
      this.id = data.id || '';
      this.text = data.text || '';
      this.answers = data.answers || [];
  }

  static fromApi(data: any): QuestionModel {
      return new QuestionModel({
          id: data.id,
          text: data.text,
          answers: data.answers?.map((answer: AnswerModel) => ({
              id: answer.id,
              text: answer.text,
              nextQuestionId: answer.nextQuestionId
          })) || []
      });
  }
}
