export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum RoleId {
  ADMIN = 1,
  USER = 2,
}

export const userRoles = Object.keys(Roles);
