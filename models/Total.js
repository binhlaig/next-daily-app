import { Schema, model, models } from "mongoose"

const TotalSchema = new Schema({
    totalOut: {
        type: String,
        required: [true, "Total OUT  is required"],
    },
    totalIn: {
        type: String,
        required: [true, "Total In  is required"],
    },
    totalSave: {
        type: String,
        required: [true, "Total Save  is required"],
    },
    month: {
        type: String,
        
    },
    date: {
        type: Date,
    },
    totalAmount: {
        type: String,
        required: [true, "Total Amount is required"],
    },
    notice: {
        type: String,
    },
},
    { timestamps: true },
);
const Total = models?.Total || model("Total", TotalSchema)

export default Total