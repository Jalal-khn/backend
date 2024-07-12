import { LoginForm } from "../../components/LoginForm";


export default function LoginPage() {
    return(
        <main>
            <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 text-black">
            <p className="text-xl font-bold">Login</p>
            <LoginForm />       
        </div>
        </main>
    );
}