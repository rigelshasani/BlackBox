"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import P5Background from "./p5Background"; 
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

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
          <div className="bg-white p-2 rounded-lg shadow-md">
            <h1 className="text-center text-3xl font-bold text-black mt-1">
              Welcome to <i>BlackBox</i>
            </h1>
          </div>
        </div>
        <Button onClick={navigateToLogin} className="mt-6">
          Go to Login/Signup
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
