import QuestionModel from "~/models/Question";

export default class QuestionnaireModel {
  id: string;
  title: string;
  description?: string;
  questions: QuestionModel[];

  constructor(data: Partial<QuestionnaireModel> = {}) {
      this.id = data.id || '';
      this.title = data.title || '';
      this.description = data.description || '';
      this.questions = data.questions || [];
  }
}
