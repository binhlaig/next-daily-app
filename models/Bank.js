import { Schema, model, models } from "mongoose"

const BankSchema = new Schema({
    bankname: {
        type: String,
        unique: [true, "Bankname already exists"],
        required: [true, "Bankname is required"],
    },
    profileImagePath: {
        type: String,
        required: [true, "Profile image is required"],
    },
    date: {
        type: Date,
    },
    address: {
        type: String,
    },
    notice: {
        type: String,
    },

    wishlist: {
        type: Array,
        default: [],
    },
    cart: {
        type: Array,
        default: [],
    },
    orders: {
        type: Array,
        default: [],
    },
    works: {
        type: Array,
        default: [],
    },

},
    { timestamps: true },
)

const Bank = models.Bank || model("Bank", BankSchema)

export default Bank