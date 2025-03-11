import UserModel from '../User';

export type RespondentStatus = 'invited' | 'started' | 'completed';

export default class RespondentModel extends UserModel {
  status: RespondentStatus | '';

  constructor(data: Partial<RespondentModel> = {}) {
    super(data);
    this.status = data.status || '';
  }
}