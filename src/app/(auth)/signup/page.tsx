"use client";
import InputBox from "@/components/ui/InputBox";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
  return (
    <div className="p-2 flex items-center justify-center min-h-screen">
      <form className="m-auto border-2 p-2 w-96">
        <div className="p-2 flex flex-col">
          <p className="text-center font-bold text-2xl mb-4">Signup</p>
          <div>
            <InputBox label={"Name"} type={"text"} />
          </div>
          <div>
            <InputBox label={"Email"} type={"email"} />
          </div>
          <div>
            <InputBox label={"Password"} type={"password"} />
          </div>
          <div className="flex justify-between text-sm pb-6">
            <Link href={"/login"}>
              <p className="text-blue-800">Already Have An Account?</p>
            </Link>
          </div>
          <Button className="w-1/3 m-auto" color="success">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
