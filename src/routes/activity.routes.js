import express from 'express';
import { createActivity, getAllActivities } from '../controllers/activity.controllers.js';

const ActivityRouter = express.Router();

ActivityRouter.post('/create',createActivity);
ActivityRouter.get('/get',getAllActivities);

export default ActivityRouter;