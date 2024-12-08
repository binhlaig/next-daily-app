"use server"
import Total from "@/models/Total";
import { connectToDB } from "@/mongodb/database";

export const fetchCharts = async () => {
    try {
        connectToDB();
        const users = await Total.find();
        return users;
       
        
    } catch (err) {
        console.log(err);
        throw new("Fail to fetching cahrt data!") 
    }
}