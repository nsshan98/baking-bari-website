"use client";
import InputBox from "@/components/ui/InputBox";
import { useUserSignUp } from "@/hooks/custom/authQuery";
import {
  userSignUpSchema,
  UserSignUpSchemaTypes,
} from "@/schema-types/user-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SignupPage = () => {
  const { userSignUp } = useUserSignUp();
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<UserSignUpSchemaTypes>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(userSignUpSchema),
  });

  const onSubmit = async (data) => {
    userSignUp.mutate(data, {
      onSuccess: (response) => {
        console.log(response);
      },
    });
    console.log(data);
  };
  return (
    <div className="p-2 flex items-center justify-center min-h-screen">
      <form
        className="m-auto border-2 p-2 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-2 flex flex-col">
          <p className="text-center font-bold text-2xl mb-4">Signup</p>
          <Controller
            name="fullname"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <InputBox
                {...field}
                label={"Name"}
                type={"text"}
                isInvalid={!!error}
                errorMessage={error?.message}
              />
            )}
          />
          <div>
            <Controller
              name="email"
              control={control}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <InputBox
                  {...field}
                  label={"Email"}
                  type={"email"}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <InputBox
                  {...field}
                  label={"Password"}
                  type={"password"}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              )}
            />
          </div>
          <div className="flex justify-between text-sm pb-6">
            <Link href={"/login"}>
              <p className="text-blue-800">Already Have An Account?</p>
            </Link>
          </div>
          <Button type="submit" className="w-1/3 m-auto" color="success">
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
