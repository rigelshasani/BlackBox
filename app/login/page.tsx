"use client"; 

import React from "react";
import Image from "next/image";
import AuthForm from "../(site)/component/AuthForm"; 
import P5Background from "./background"; 

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
          <div className="bg-white p-6 rounded-lg shadow-md mt-1 mb-1">
            <h2 className="text-center text-3xl font-bold tracking-tight text-black">
              <i>Sign into your account</i>
            </h2>
          </div>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
