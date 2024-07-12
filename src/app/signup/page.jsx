import { SignupForm } from "../../components/SignupForm";

export default function SignupPage() {
    return(
       <main>
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 text-black">
            <p className="text-xl font-bold">Sign Up</p>
            <SignupForm />
        </div>
       </main>
    );
}