import { API_BASE_URL } from '~/config.ts';

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

  static async updateRelationships(id: string, relationships: RelationshipModel[]) {
    await fetch(`${API_BASE_URL}/polls/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        relationships: relationships
      }),
    })
  }
}