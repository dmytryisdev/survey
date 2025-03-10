export default class AnswerModel {
  id: string;
  text: string;
  nextQuestionId?: string;

  constructor(data: Partial<AnswerModel> = {}) {
      this.id = data.id || '';
      this.text = data.text || '';
      this.nextQuestionId = data.nextQuestionId || '';
  }
}
