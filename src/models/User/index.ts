export default class UserModel {
  id: string;
  fullName: string;
  email: string;
  isBanned: boolean;

  constructor(data: Partial<UserModel> = {}) {
    this.id = data.id || '';
    this.fullName = data.fullName || '';
    this.email = data.email || '';
    this.isBanned = data.isBanned || false;
  }
}
