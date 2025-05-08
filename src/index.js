import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/dbConnection.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import ActivityRouter from './routes/activity.routes.js';
import BookingRouter from './routes/booking.route.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
connectDb();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/auth', authRouter)
app.use('/api/activity',ActivityRouter);
app.use('/api/booking',BookingRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})