import { Activity } from "../models/Activity.models.js";
import { Booking } from "../models/booking.models.js";
import { bookingSchema } from "../validator/bookingValidators.js";
export const bookActivity = async (req, res) => {
    try {
        const {error} = bookingSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
                status: false,
                data: null
            });
        }
        
        const activity = await Activity.findById(req.body.activityId);
        if (!activity) return res.status(404).json({
            message: 'Activity not found',
            status: false,
            data: null
        });

        const booking = await Booking.create({
            user: req.user.userId,
            activity: req.body.activityId
        });

        res.status(201).json({
            message: "Booking created successfully",
            status: true,
            booking
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
}

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.userId })
            .populate('activity', 'title description location dateTime');

        res.status(200).json({
            message: "Bookings fetched successfully",
            status: true,
            bookings
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}