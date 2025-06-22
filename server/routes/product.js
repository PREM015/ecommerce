// ✅ Import express
import express from 'express';

// ✅ Initialize router
const router = express.Router();

// ✅ Example test route: GET /api/products/test
router.get('/test', (req, res) => {
  res.send('✅ Product route is working!');
});

// ✅ Export router for use in server.js
export default router;
