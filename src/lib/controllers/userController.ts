import { PrismaClient } from "@prisma/client";
import { hash, compare } from "bcryptjs";

const prisma = new PrismaClient();

type CreateUserInput = {
  name: string;
  email?: string;
  phone?: string;
  password: string;
  avatar?: string;
};

type UserUpdateInput = {
  name?: string;
  avatar?: string;
  password?: string;
};

/**
 * Create a new user with hashed password.
 * Either email or phone must be provided.
 */
export const createUser = async ({
  name,
  email,
  phone,
  password,
  avatar,
}: CreateUserInput) => {
  if (!email && !phone) {
    throw new Error("Either email or phone number must be provided.");
  }

  const hashedPassword = await hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      password: hashedPassword,
      avatar,
    },
  });

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    avatar: newUser.avatar,
    isAdmin: newUser.isAdmin,
  };
};

/**
 * Find a user by email or phone.
 */
export const getUserByEmailOrPhone = async ({
  email,
  phone,
}: {
  email?: string;
  phone?: string;
}) => {
  if (!email && !phone) {
    throw new Error("Email or phone is required");
  }

  return prisma.user.findFirst({
    where: {
      OR: [
        ...(email ? [{ email }] : []),
        ...(phone ? [{ phone }] : []),
      ],
    },
  });
};

/**
 * Verify user credentials using email or phone and password.
 */
export const verifyUserCredentials = async (
  identifier: string,
  password: string
) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
    },
  });

  if (!user || !user.password) return null;

  const isValid = await compare(password, user.password);
  return isValid ? user : null;
};

/**
 * Update user profile (name, avatar, password).
 */
export const updateUserProfile = async (
  userId: string,
  updates: UserUpdateInput
) => {
  const updateData: Partial<UserUpdateInput> = { ...updates };

  if (updates.password) {
    updateData.password = await hash(updates.password, 12);
  }

  return prisma.user.update({
    where: { id: userId },
    data: updateData,
  });
};

/**
 * Get all users (excluding password).
 */
export const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      avatar: true,
      isAdmin: true,
      createdAt: true,
    },
  });
};

/**
 * Delete a user by ID.
 */
export const deleteUser = async (userId: string) => {
  return prisma.user.delete({
    where: { id: userId },
  });
};
