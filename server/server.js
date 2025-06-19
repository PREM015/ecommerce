// server.js

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
const __dirname = path.resolve();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Static Frontend (Vite)
const frontendPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(frontendPath));

// // FIXED: Use '/*' not '*'
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(client, 'index.html'));
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
