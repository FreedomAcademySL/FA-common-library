import { User } from './user.model';

export interface PasswordRecovery {
  uuid: string;
  userId: string;
  user: User;
  expireDate: string;
  token: string;
}
