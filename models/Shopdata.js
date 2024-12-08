import { Schema, model, models } from "mongoose"

const ShopSchema = new Schema({
    shopname: {
        type: String,
    },
    profileImagePath: {
        type: String,
    },
    date: {
        type: Date,
    },
    month: {
        type: Array,
        default: [],
    },
    amount: {

        type: Array,
        default:[],
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

const Shopdata = models?.Shopdata || model("Shopdata", ShopSchema)

export default Shopdata