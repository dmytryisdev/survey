export default class RelationshipModel {
  question_id: string;
  next_question_id: string | null;
  answer_id?: string;

  constructor(data: Partial<RelationshipModel> = {}) {
    this.question_id = data.question_id || '';
    this.next_question_id = data.next_question_id || '';

    if (data.answer_id) {
      this.answer_id = data.answer_id;
    }
  }
}
