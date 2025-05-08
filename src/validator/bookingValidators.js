import Joi from "joi";


export const bookingSchema = Joi.object({
    activityId: Joi.string().length(24).required()
})

