"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "./utils";
import { writeFile } from "fs/promises"
import { signOut } from "next-auth/react";
import Outcome from "@/models/Outcome";
import { connectToDB } from "@/mongodb/database";
import Income from "@/models/income";
import Shopdata from "@/models/Shopdata";
import { shops } from "@/data";
import Total from "@/models/Total";


//User

export const addUser = async (formData) => {
  const { username, email, password, profileImage } =
    Object.fromEntries(formData);


  try {
    connectDB();
    const file = formData.get('profileImage')

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const profileImagePath = `/Users/apple/Desktop/real_proj/next_admin-daily/public/uploads/${file.name}`
    await writeFile(profileImagePath, buffer)

    console.log(`open ${profileImagePath} to see the uploaded files`)


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImagePath: `/uploads/${file.name}`,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/login");
  redirect("/login");
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }
}
export const handleLogout = async () => {
  await signOut();
};


//Outcome
export const addOutcome = async (formData) => {
  const { creator, date, amount, shop, bank, notice } =
    Object.fromEntries(formData);
  try {
    connectToDB()

    const newOutcome = new Outcome({
      creator,
      date,
      amount,
      shop,
      bank,
      notice,
    });
    await newOutcome.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Insert Outcome !");
  }
  revalidatePath("/dashboard/outcome");
  redirect("/dashboard/outcome");
};

export const deleteOutcome = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Outcome.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/outcome");
};

export const updateOutcomedata = async (formData) => {
  const { id, date, amount, shop, bank, notice } =
    Object.fromEntries(formData);
  try {

    connectToDB();
    const updateFields = {
      date, amount, shop, bank, notice
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]);
    await Outcome.findByIdAndUpdate(id, updateFields)


  } catch (err) {
    console.log(err);
    throw new Error("Fail to Update Outcome!");
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");

}


//Income

export const addIncome = async (formData) => {
  const { date, amount, month, compamy, notice } =
    Object.fromEntries(formData);

  try {
    connectToDB()
    const newIncome = new Income({
      date,
      amount,
      month,
      compamy,
      notice,
    });
    await newIncome.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Insert Income !");
  }
  revalidatePath("/dashboard/income");
  redirect("/dashboard/income");
};
export const deleteIncome = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Income.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Income!");
  }

  revalidatePath("/dashboard/income");
};
export const updateIncome = async (formData) => {
  const { id, date, amount, month, compamy, notice } =
    Object.fromEntries(formData);

  try {
    connectToDB()
    const updateFields = {
      date, amount, month, compamy, notice
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]);
    await Income.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
};

//Total
export const addTotal = async (formData) => {
  const { totalOut, totalSave, totalIn, month, date, totalAmount, notice } =
    Object.fromEntries(formData);

  try {
    connectToDB()

    const newTotal = new Total({
      totalOut,
      totalSave,
      totalIn,
      totalAmount,
      month,
      notice,
    });
    await newTotal.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Insert Income !");
  }
  revalidatePath("/dashboard/income");
  redirect("/dashboard/income");
};