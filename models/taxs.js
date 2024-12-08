import { Schema, model, models } from "mongoose"

const TaxsSchema = new Schema(
    {
        date: {
            type: Date,
                   
        },
        amount: {
            type: String,
            required: true,
        },
        taxname: {
            type: String,
            required: false,
        },
        bank: {
            type: String,
            default: true,
        },
        notice: {
            type: String,
          },
    },
    { timestamps: true },
    
);
const Taxs = models?.Taxs || model("Taxs", TaxsSchema)
export default Taxs
