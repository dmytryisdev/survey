import QuestionModel from "~/models/Question";
import { API_BASE_URL } from '~/config.ts';

export default class PollModel {
  id: string;
  title: string;
  questions?: QuestionModel[];
  description?: string;

  constructor(data: Partial<PollModel> = {}) {
    this.id = data.id || '';
    this.title = data.title || '';
    this.questions = data.questions || [];
    this.description = data.description || '';
  }

  static fromApi(data: any): PollModel {
    return new PollModel({
      id: data.id,
      title: data.title,
    });
  }

  static async getPolls() {
    const response = await fetch(`${API_BASE_URL}/polls/`);
    const data = await response.json();
    return data.map((poll: any) => PollModel.fromApi(poll));
  }

  static async createPoll(title: string) {
    const response = await fetch(`${API_BASE_URL}/polls/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    return PollModel.fromApi(data);
  }

  static async removePoll(id: string) {
    await fetch(`${API_BASE_URL}/polls/${id}/`, {
      method: 'DELETE',
    });
  }
}