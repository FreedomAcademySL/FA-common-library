import { User } from './user.model';

export interface UserEngagement {
  uuid: string;
  userUuId: string;
  user: User;
  programVisitCount: number;
  lastProgramVisitDate: string;
}
