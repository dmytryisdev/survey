import type AnswerModel from "~/models/Answer";
import { API_BASE_URL } from '~/config.ts';

export default class QuestionModel {
  id: string;
  poll: string;
  text: string;
  answers: AnswerModel[];
  from_answers: AnswerModel[];
  subquestion: QuestionModel | null;

  constructor(data: Partial<QuestionModel> = {}) {
    this.id = data.id || '';
    this.poll = data.poll || '';
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
        nextQuestion: answer.next_question
      })) || [],
      from_answers: data.from_answers?.map((answer: AnswerModel) => ({
        id: answer.id,
        text: answer.text,
        nextQuestion: answer.next_question
      })) || []
    });
  }

  static async getQuestions(pollId: string) {
    const response = await fetch(`${API_BASE_URL}/polls/${pollId}/questions/`);
    const data = await response.json();
    return data.map((question: any) => QuestionModel.fromApi(question));
  }

  static async saveQuestion(question: QuestionModel, pollId: string) {
    const method = question.id ? 'PUT' : 'POST';
    const response = await fetch(`${API_BASE_URL}/questions/` + (question.id ? `${question.id}/` : ''), {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: question.text,
        poll: pollId,
        answers: question.answers.map((answer: AnswerModel) => ({ text: answer.text })),
      }),
    });
    const data = await response.json();
    return QuestionModel.fromApi(data);
  }
}