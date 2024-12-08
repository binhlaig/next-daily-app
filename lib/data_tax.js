"use server";

import Taxs from "@/models/taxs";
import { connectToDB } from "@/mongodb/database";

export const fetchTaxs = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 6;
    try {
        connectToDB();
        const Count = await Taxs.find().countDocuments();
        const Tax = await Taxs.find({ taxname: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))

        return {
            Count, Tax
        };
    } catch (err) {
        console.log(err);
        throw new ("Fail to fetchtax data!");

    }

}