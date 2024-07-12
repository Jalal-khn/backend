"use client"
import { useState } from "react"
import {login} from "../actions/login"
import { useRouter } from "next/navigation";

export function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

async function handleSubmit(e){
    e.preventDefault();
    const response = await login({email, password});
    setMessage(response.success || response.error)
    if (response.success) {
        router.push("/dashboard")
    }
    setEmail("")
    setPassword("")
}


    return (
        <form className="flex justify-center items-center flex-col gap-5" onSubmit={handleSubmit}>
            <p>{message}</p>
                <label className="font-bold" htmlFor="email">Email</label>
                <input className="border-black border-2 p-2 rounded-md" type="text" id="email" 
                placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="font-bold" htmlFor="password">Password</label>
                <input className="border-black border-2 p-2 rounded-md" type="password" id="password"
                 placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="p-2 bg-red-700 font-bold rounded-md text-white"
                type="submit">Submit</button>
            </form>
    )
}