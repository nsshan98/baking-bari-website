"use client";
import InputBox from "@/components/ui/InputBox";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-2 flex items-center justify-center min-h-screen">
      <div className="m-auto border-2 p-2 w-96">
        <div className="p-2 flex flex-col">
          <p className="text-center font-bold text-2xl mb-4">Login</p>
          <div>
            <InputBox label={"Email"} type={"email"} />
          </div>
          <div>
            <InputBox label={"Password"} type={"password"} />
          </div>
          <div className="flex justify-between text-sm pb-6">
            <Link href={"#"}>
              <p className="text-blue-800">Forget Password?</p>
            </Link>
            <Link href={"/signup"}>
              <p className="text-blue-800">Wanna Join?</p>
            </Link>
          </div>
          <Button className="w-1/3 m-auto" color="success">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
