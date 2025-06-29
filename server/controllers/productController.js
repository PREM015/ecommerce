/*
# 📁 controllers/productController.js - Notes with Code

## 🎯 Purpose:
This controller handles **product-related logic** in the backend. It is the main logic handler for:
- CRUD operations (Create, Read, Update, Delete)
- Filters, Search, Stock, Offers, Reviews, etc.
*/

import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';

// ✅ 1. CREATE PRODUCT
// ➕ Add a new product to DB
// 🔐 Admin only
export const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, category, quantity, brand } = req.body;

    if (!name || !price) {
        res.status(400);
        throw new Error('Name and price are required');
    }

    const product = new Product({
        name,
        description,
        price,
        category,
        quantity,
        brand,
        createdBy: req.user._id,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
});

// ✅ 2. GET ALL PRODUCTS
// 📦 Get list of all products (public)
export const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// ✅ 3. GET SINGLE PRODUCT
// 🔍 Get product by its MongoDB ID
export const getSingleProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    res.json(product);
});

// ✅ 4. UPDATE PRODUCT
// 🛠️ Update product by ID
export const updateProduct = asyncHandler(async (req, res) => {
    const { name, description, price, category, quantity, brand } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.quantity = quantity || product.quantity;
    product.brand = brand || product.brand;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
});

// ✅ 5. DELETE PRODUCT
// ❌ Delete product from DB
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    await product.deleteOne();
    res.json({ message: 'Product removed' });
});

/*
🔄 2. Filtering, Sorting & Pagination (To Do)
- getFilteredProducts(req, res)
  🧠 Use query params to filter by:
    - category, minPrice, maxPrice, brand, rating, etc.
    - Support sort by price/date/name
    - Example: ?category=phones&minPrice=1000&maxPrice=20000&sort=price_asc&page=2&limit=20
*/

/*
🔍 3. Search Functionality
- searchProducts(req, res)
  🔍 Allow users to search by name or description using regex (case-insensitive)

🐌 4. Slug-Based Fetch
- getProductBySlug(req, res)
  🌐 Fetch product via URL slug: /product/iphone-15-pro (instead of MongoDB ID)

⭐ 5. Product Reviews
- addProductReview(req, res) → Users can submit reviews (rating + comment)
- getProductReviews(req, res) → Show all reviews for a product
- getProductReviewSummary(req, res) → Show average rating, total reviews, rating breakdown

📦 6. Stock Management
- checkStock(req, res) → Check product stock (used before placing an order)
- reduceStock(productId, quantity) → Subtract quantity from available stock
- increaseStock(productId, quantity) → Add quantity back (on order cancel/return)

📊 7. Admin Analytics
- getProductStats(req, res)
  📈 Show top-selling products, low stock alerts, total product count, etc.

💖 8. Wishlist Support
- addToWishlist(userId, productId) → Add product to user's wishlist
- removeFromWishlist(userId, productId) → Remove from wishlist
- getUserWishlist(userId) → Show all wishlist items of a user

🗃️ 9. Soft Delete / Archive
- archiveProduct(req, res) → Mark product as deleted without actually removing from DB
- restoreProduct(req, res) → Reactivate archived product

📤 10. Bulk Upload
- bulkUploadProducts(req, res)
  📥 Admin can upload multiple products via CSV or Excel file

🏷️ 11. Discounts & Offers
- Add fields: originalPrice, discountPrice, discountPercent
- Auto calculate offer percentage or discount price based on logic

👀 12. Recently Viewed (Frontend support)
- Optional: Increment productViewCount on each view for analytics

✨ Future Add-ons
- Product Tags like "new", "bestseller", etc.
- Multiple images for a product (array of image URLs)
- Shipping & return info for each product
- Flash sale timer (start time, end time, countdown logic)
*/
