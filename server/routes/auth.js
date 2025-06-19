// server/routes/auth.js
import express from 'express';
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('✅ Auth route is working!');
});

export default router;
