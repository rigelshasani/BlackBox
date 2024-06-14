"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import P5Background from "./p5Background"; // Ensure this path is correct
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
        </div>
        <h1 className="text-4xl font-bold text-white">Welcome to BlackBox</h1>
        <Button onClick={navigateToLogin} className="mt-6">
          Go to Login/Signup
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
