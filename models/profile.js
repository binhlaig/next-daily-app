import { Schema, model, models } from "mongoose"


const ProfileSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "Shopdata"
      },
    
    profilename: {
        type: String
    },
    profileImagePath: {
        type: String,
    },
    date: {
        type: Date,
    },
    amount: {
        type: Number,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    notice: {
        type: String,
    },
},
    { timestamps: true },
)
const Profile = models?.Profile || model("Profile", ProfileSchema)
export default Profile
