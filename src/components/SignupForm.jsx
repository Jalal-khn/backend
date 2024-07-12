"use client"
import { useState } from "react"
import { createUser } from "../actions/signup";

export function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

async function handleSubmit(e){
    e.preventDefault();
    const response = await createUser({name, email, password});
    setMessage(response.error || response.success)
    console.log(response)
    setEmail("")
    setPassword("")
}


    return (
        <form className="flex justify-center items-center flex-col gap-5" onSubmit={handleSubmit}>
             <label className="font-bold" htmlFor="email">Name</label>
                <input className="border-black border-2 p-2 rounded-md" type="text" id="email" 
                placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <label className="font-bold" htmlFor="email">Email</label>
                <input className="border-black border-2 p-2 rounded-md" type="text" id="email" 
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="font-bold" htmlFor="password">Password</label>
                <input className="border-black border-2 p-2 rounded-md" type="password" id="password"
                 placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
                 <p>{message}</p>
                <button className="p-2 bg-red-700 font-bold rounded-md text-white"
                type="submit">Submit</button>
            </form>
    )
}