"use server";
import prisma from "../lib/db";

export async function login({email, password}){
    if (!email || !password) {
        return {error:"All fields are required"}
    }

    const existingUser = await prisma.user.findUnique({
        where:{email}
    })

    if (!existingUser) {
        return {error:"Invalid credentials"}
    }

    const isPasswordMatch = password === existingUser.password;

    if (!isPasswordMatch) {
        return {error:"Invalid credentials"}
    }
    // TODO: Make session
    return {success:"Logged in"}


}