import { Activity } from "../models/Activity.models.js";
import { createActivitySchema } from "../validator/activityValidators.js";

export const createActivity = async (req , res)=>{
    const {error} = createActivitySchema.validate(req.body);

    if(error){
        return res.status(400).json({
            message:error.details[0].message,
            status:false,
            data:null
        })
    }
    const { title, description, location, dateTime } = req.body;



    const newActivity = new Activity({
        title,
        description,
        location,
        dateTime
    })

    await newActivity.save();

    return res.status(200).json({
        message:"Activity created successfully",
        status:true,
        data:newActivity
    })
}

export const getAllActivities = async (req,res)=>{
    const activities = await Activity.find();

    if(activities.length === 0){
        return res.status(404).json({
            message:"No activities found",
            status:false,
            data:null
        })
    }


    return res.status(200).json({
        message:"Activities fetched successfully",
        status:true,
        data:activities
    })
}