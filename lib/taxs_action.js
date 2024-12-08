"use server";

import Taxs from "@/models/taxs";
import { connectToDB } from "@/mongodb/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addtaxs = async (formData) => {
    const { date, amount, taxname, bank, notice } =
    Object.fromEntries(formData);

    try {
        connectToDB()
        const newtaxs= new Taxs({
          date,
          amount,
          taxname,
          bank,
          notice,
        });
        await newtaxs.save();
        
    } catch (err) {
        console.log(err);
    throw new Error("Failed to create !");
    }
    revalidatePath("/dashboard/details_tax");
    redirect("/dashboard/details_tax");
}