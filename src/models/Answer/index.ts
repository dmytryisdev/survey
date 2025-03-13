import type QuestionModel from '~/models/Question';
import { API_BASE_URL } from '~/config.ts';

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

  static async deleteAnswers(ids: string[]) {
    await fetch(`${API_BASE_URL}/questions/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "ids": ids })
    });
  }
}
