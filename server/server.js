// ✅ server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';

dotenv.config();
connectDB();

const app = express();

// ✅ Fix __dirname for ES modules
const __dirname = path.resolve();

// ✅ Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// ✅ Serve frontend build (Vite output)
const frontendPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(frontendPath));

// ✅ FIXED: Use '*' instead of ':path(*)'
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
