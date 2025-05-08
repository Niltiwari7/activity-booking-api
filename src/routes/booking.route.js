import express from 'express';
import { authenticateUser } from '../middlewares/VerifyUser.js';
import { bookActivity, getAllBookings } from '../controllers/booking.controllers.js';

const BookingRouter = express.Router();

BookingRouter.post('/book',authenticateUser,bookActivity);
BookingRouter.get('/get',authenticateUser,getAllBookings);

export default BookingRouter;