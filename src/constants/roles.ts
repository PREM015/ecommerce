// roles.ts placeholder
// src/constants/roles.ts

/**
 * User role constants for authorization and access control
 */
export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  GUEST: "GUEST",
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export default ROLES;
