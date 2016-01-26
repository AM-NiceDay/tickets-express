import { Router } from 'express';
import { authenticate, ensureAuthenticated } from '../controllers/authController';
import { createUser } from '../controllers/userController';
import { getCity, getCities, createCity, removeCity } from '../controllers/cityController';
import { getBus, getBuses, createBus, removeBus } from '../controllers/busController';
import { getTicket, getTickets, createTicket, removeTicket } from '../controllers/ticketController';

const router = Router();

router.post('/users', createUser);

router.post('/authenticate', authenticate);

router.get('/cities/:id', getCity);
router.get('/cities', getCities);
router.post('/cities', createCity);
router.delete('/cities/:id', removeCity);

router.get('/cities/:cityId/buses/:busId', getBus);
router.get('/cities/:cityId/buses', getBuses);
router.post('/cities/:cityId/buses', createBus);
router.delete('/cities/:cityId/buses/:busId', removeBus);

router.get('/cities/:cityId/buses/:busId/tickets/:ticketId', getTicket);
router.get('/cities/:cityId/buses/:busId/tickets', getTickets);
router.post('/cities/:cityId/buses/:busId/tickets', createTicket);
router.delete('/cities/:cityId/buses/:busId/tickets/:ticketId', removeTicket);

export default router;
