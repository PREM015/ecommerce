// Category.ts
// src/lib/models/Category.ts

import { prisma } from '@/lib/db';
import { Category } from '@prisma/client';


export const createCategory = async (name: string): Promise<Category> => {
  return await prisma.category.create({
    data: { name },
  });
};

export const getAllCategories = async (): Promise<Category[]> => {
  return await prisma.category.findMany({
    orderBy: { name: 'asc' },
  });
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: { id },
  });
};

export const getCategoryByName = async (name: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: { name },
  });
};

export const updateCategory = async (
  id: string,
  data: { name?: string }
): Promise<Category> => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id: string): Promise<Category> => {
  return await prisma.category.delete({
    where: { id },
  });
};
