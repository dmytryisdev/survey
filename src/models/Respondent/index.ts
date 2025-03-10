type RespondentStatus = 'invited' | 'started' | 'completed'

export default class RespondentModel {
  id: string;
  fullName: string;
  email: string;
  status: RespondentStatus | '';

  constructor(data: Partial<RespondentModel> = {}) {
    this.id = data.id || '';
    this.fullName = data.fullName || '';
    this.email = data.email || '';
    this.status = data.status || '';
  }
}
