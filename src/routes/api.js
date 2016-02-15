import { Router } from 'express';
import { authenticate, ensureAuthenticated } from '../controllers/authController';
import { createUser } from '../controllers/userController';
import { getCity, getCities, createCity, removeCity } from '../controllers/cityController';
import { getBus, getBuses, createBus, removeBus } from '../controllers/busController';
import { getLastTicket, getTicket, getTickets, createTicket, removeTicket } from '../controllers/ticketController';

const router = Router();

router.post('/users', createUser);

router.post('/authenticate', authenticate);

router.get('/cities/:id', ensureAuthenticated, getCity);
router.get('/cities', ensureAuthenticated, getCities);
router.post('/cities', ensureAuthenticated, createCity);
router.delete('/cities/:id', ensureAuthenticated, removeCity);

router.get('/cities/:cityId/buses/:busId', ensureAuthenticated, getBus);
router.get('/cities/:cityId/buses', ensureAuthenticated, getBuses);
router.post('/cities/:cityId/buses', ensureAuthenticated, createBus);
router.delete('/cities/:cityId/buses/:busId', ensureAuthenticated, removeBus);

router.get('/users/:userId/tickets', ensureAuthenticated, getLastTicket);
router.get('/cities/:cityId/buses/:busId/tickets/:ticketId', ensureAuthenticated, getTicket);
router.get('/cities/:cityId/buses/:busId/tickets', ensureAuthenticated, getTickets);
router.post('/cities/:cityId/buses/:busId/tickets', ensureAuthenticated, createTicket);
router.delete('/cities/:cityId/buses/:busId/tickets/:ticketId', ensureAuthenticated, removeTicket);

export default router;
