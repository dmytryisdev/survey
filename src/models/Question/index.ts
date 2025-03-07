interface Answer {
  id: string; // ID ответа
  text: string; // Текст ответа
  nextQuestionId?: string; // ID следующего вопроса (если есть)
}

export default class QuestionModel {
  id: string;
  text: string;
  answers: Answer[]; // Варианты ответов

  constructor(data: Partial<QuestionModel> = {}) {
      this.id = data.id || '';
      this.text = data.text || '';
      this.answers = data.answers || [];
  }

  static fromApi(data: any): QuestionModel {
      return new QuestionModel({
          id: data.id,
          text: data.text,
          answers: data.answers?.map((answer: Answer) => ({
              id: answer.id,
              text: answer.text,
              nextQuestionId: answer.nextQuestionId
          })) || []
      });
  }

  // Добавляет ответ в вопрос
  addAnswer(answer: Answer): void {
      this.answers.push(answer);
  }
}
