import Total from "@/models/Total";
import { connectToDB } from "@/mongodb/database";

export const fectchTotal = async ()=>{
    try {
       connectToDB()
        const totalAll = await Total.find();
        return(totalAll);
    } catch (err) {
        console.log(err);
        throw new("မိတ်ဆွေ! ဒေတာတစ်ခုခုမှားနေသည်။")   
    }
}