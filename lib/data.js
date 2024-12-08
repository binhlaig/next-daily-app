
import Income from "@/models/income";
import Outcome from "@/models/Outcome";
import Shopdata from "@/models/Shopdata";
import Total from "@/models/Total";
import User from "@/models/User";
import { connectToDB } from "@/mongodb/database";

export const fetchOutcome = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 6;

    try {
        connectToDB();
        const Count = await Outcome.find({ shop: { $regex: regex } }).countDocuments();
        const Countamount = await Outcome.find({shop:{$regex: regex}});
        const Total = await Outcome.find();
        const Outcomes = await Outcome.find({ shop: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { Count, Outcomes, Total, Countamount};
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");

    }
}


export const fetchIncome = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 6;
    try {
        connectToDB();
        const TotalIn = await Income.find();
        const Count = await Income.find().countDocuments();
        const Incomes = await Income.find({ compamy: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { Count, Incomes, TotalIn };
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");
        
    }
}

export const fetchIncomes = async (id) => {
    console.log(id);
    try {
        connectToDB();
        const Incomes = await Income.findById(id);
        return Incomes;
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");

    }
}

export const fetchOutconeData = async (id) => {
    try {
        connectToDB();
        const OutcomeData = await Outcome.findById(id);
        return OutcomeData;
        
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");
        
    }
}


//user

export const fetchusers = async () => {

    try {
        connectToDB();
        const users = await User.find()
        return users;
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");

    }
}

//shop
export const fetchshops = async () => {

    try {
        connectToDB();
        const shops = await Shopdata.find()
        return shops;
    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");

    }
}

//Total

export const fectchTotal = async () => {
    try {
        connectToDB()
        const totalAll = await Total.find();
        return (totalAll);
    } catch (err) {
        console.log(err);
        throw new ("မိတ်ဆွေ! ဒေတာတစ်ခုခုမှားနေသည်။")
    }
}