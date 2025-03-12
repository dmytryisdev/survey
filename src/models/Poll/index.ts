import QuestionModel from "~/models/Question";

export default class PollModel {
  id: string;
  title: string;
  questions: QuestionModel[];
  description?: string;

  constructor(data: Partial<PollModel> = {}) {
      this.id = data.id || '';
      this.title = data.title || '';
      this.questions = data.questions || [];
      this.description = data.description || '';
  }
}
