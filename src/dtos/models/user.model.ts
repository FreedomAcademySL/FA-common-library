import { Roles } from '../../enums';

export interface User {
  uuid: string;
  fullName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  country: string;
  occupation: string;
  mainIssue: string;
  canAccess: boolean;
  photo: string;
  refreshToken: string;
  sessionHash: string;
  roleId: number;
  role: Roles;
}
