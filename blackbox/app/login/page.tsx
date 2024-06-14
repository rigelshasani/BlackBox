"use client"; // Ensure this is treated as a client component

import React from "react";
import Image from "next/image";
import AuthForm from "../(site)/component/AuthForm"; // Adjust the import path if necessary
import P5Background from "./background"; // Ensure this path is correct

const LoginPage = () => {
  return (
    <div className="relative flex min-h-full w-full bg-zinc-900">
      <P5Background />
      <div className="absolute top-0 left-0 flex min-h-full w-full flex-col justify-center items-center z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md rounded-lg">
          <Image
            alt="logo"
            height="150"
            width="150"
            className="mx-auto w-auto mt-6"
            src="/images/logo.png"
          />
          <h2 className="mt-6 mb-6 text-center text-3xl font-bold tracking-tight text-black">
            <i>Sign into your account</i>
          </h2>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
