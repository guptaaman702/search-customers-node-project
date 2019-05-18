import express from 'express';
import customerRoutes from './customers';

const router = express.Router();	// eslint-disable-line new-cap

/** GET /api-status - Check service status **/
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

router.use('/customers', customerRoutes);

export default router;
