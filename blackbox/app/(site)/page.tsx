import Image from "next/image";

import AuthForm from "./component/AuthForm";

//Homepage 
// TODO: Welcome Page with greetings


export default function Home() {
    return (
        <div className=" flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-zinc-900">

            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-neutral-950 rounded-lg">
                <Image alt="logo" height="80" width="80" className="mx-auto w-auto mt-6" src="/images/logo.png" />

                <h2 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-white"> Sign into your account
                </h2>
            </div>
            <AuthForm />

        </div>
    );
}
