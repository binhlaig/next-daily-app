"use server"

import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises"
import { redirect } from "next/navigation";
import { connectDB } from "./utils";
import Shopdata from "@/models/Shopdata";
import { profile } from "console";

export const addShop = async (formData) => {
  const { shopname, date, address, profileImage, notice } =
    Object.fromEntries(formData);


  try {
    connectDB();
    const file = formData.get('profileImage')

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const profileImagePath = `/Users/apple/Desktop/Real Project/next_admin-daily/public/uploads/${file.name}`
    await writeFile(profileImagePath, buffer)

    console.log(`open ${profileImagePath} to see the uploaded files`)

    const newShop = new Shopdata({
      shopname,
      date,
      address,
      notice,
      profileImagePath: `/uploads/${file.name}`,
    });
    await newShop.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Shop!");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};
