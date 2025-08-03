// categoryController.ts
import { NextRequest, NextResponse } from "next/server";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "@/lib/models/Category";

// Get all categories
export async function getAllCategoriesHandler() {
  try {
    const categories = await getAllCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return new NextResponse("Failed to fetch categories", { status: 500 });
  }
}

// Create a new category
export async function createCategoryHandler(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name) {
      return new NextResponse("Category name is required", { status: 400 });
    }

    const newCategory = await createCategory(name);
    return NextResponse.json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    return new NextResponse("Failed to create category", { status: 500 });
  }
}

// Get category by ID
export async function getCategoryByIdHandler(id: string) {
  try {
    const category = await getCategoryById(id);

    if (!category) {
      return new NextResponse("Category not found", { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return new NextResponse("Failed to fetch category", { status: 500 });
  }
}

// Update category
export async function updateCategoryHandler(req: NextRequest, id: string) {
  try {
    const { name } = await req.json();

    if (!name) {
      return new NextResponse("Category name is required", { status: 400 });
    }

    const updated = await updateCategory(id, name);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating category:", error);
    return new NextResponse("Failed to update category", { status: 500 });
  }
}

// Delete category
export async function deleteCategoryHandler(id: string) {
  try {
    const deleted = await deleteCategory(id);
    return NextResponse.json(deleted);
  } catch (error) {
    console.error("Error deleting category:", error);
    return new NextResponse("Failed to delete category", { status: 500 });
  }
}
