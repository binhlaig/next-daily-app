"use server"
import Shopdata from "@/models/Shopdata";
import { connectToDB } from "@/mongodb/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchProData = async (id) => {
    try {
        connectToDB();
        const ProData = await Shopdata.findById(id);
        return ProData;

    } catch (err) {
        console.log(err);
        throw new ("Failed to fetch user!");

    }
}

export const updateProfiledata = async (formData) => {
    const { id, amount, month } =
        Object.fromEntries(formData);
    try {

        connectToDB();
        const updateFields = {
            id, amount, month
        }
        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]);
        await Shopdata.findByIdAndUpdate(id, {
            "$push":
                updateFields 
        })


    } catch (err) {
        console.log(err);
        throw new Error("Fail to Update Outcome!");
    }
    revalidatePath("/dashboard/chart");
    redirect("/dashboard/chart");

}
