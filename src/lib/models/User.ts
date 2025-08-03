// src/lib/models/User.ts

export interface User {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  password: string; // Required for backend usage (auth, hashing)
  avatar?: string | null;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
// src/lib/models/User.ts (same file)

export type PublicUser = Omit<User, "password">;
// Optional helper if needed

export const toPublicUser = (user: User): PublicUser => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...publicUser } = user;
  return publicUser;
};
