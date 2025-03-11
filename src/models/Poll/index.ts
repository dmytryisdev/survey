import QuestionModel from "~/models/Question";

export default class PollModel {
  id: string;
  title: string;
  description?: string;
  questions: QuestionModel[];

  constructor(data: Partial<PollModel> = {}) {
      this.id = data.id || '';
      this.title = data.title || '';
      this.description = data.description || '';
      this.questions = data.questions || [];
  }
}
