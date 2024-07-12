"use server";

import prisma from "../lib/db";

export async function createUser({name, email, password}){
    if (!name || !email || !password) {
        return { error:"All fields are required" }     
    }

    const existingUser = await prisma.user.findUnique({
        where:{email}
    })
    if (existingUser) {
        return {error : "User already exists"}
    }

    await prisma.user.create({
        data:{
            name, email, password
        }
    })

    return {success:"Registered successfully"}

}