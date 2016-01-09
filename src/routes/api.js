import { Router } from 'express';
import { authenticate, ensureAuthenticated } from '../controllers/authController';
import { createUser } from '../controllers/userController';
import { getBus, getBuses, createBus, removeBus } from '../controllers/busController';

const router = Router();

router.post('/users', createUser);

router.post('/authenticate', authenticate);

router.get('/buses/:busId', getBus);
router.get('/buses', getBuses);
router.post('/buses', createBus);
router.delete('/buses/:busId', removeBus);

export default router;
