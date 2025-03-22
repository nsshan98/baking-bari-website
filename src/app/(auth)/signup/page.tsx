"use client";
import InputBox from "@/components/ui/InputBox";
import { useUserSignUp } from "@/hooks/custom/authQuery";
import {
  userSignUpSchema,
  UserSignUpSchemaTypes,
} from "@/schema-types/user-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignupPage = () => {
  const { userSignUp } = useUserSignUp();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UserSignUpSchemaTypes>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(userSignUpSchema),
  });

  const onSubmit = async (payload: UserSignUpSchemaTypes) => {
    userSignUp.mutate(payload, {
      onSuccess: (response) => {
        console.log(response)
        toast.success(response?.message)
      },
      onError: (error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.error)
        }
      }
    });
    console.log(payload);
  };
  console.log(errors)
  return (
    <div className="p-2">
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
              <div>
                <InputBox label={"Name"} type={"text"} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e.target.value)
                }} />
              </div>
            )}
          />
          <div>
            <Controller
              name="email"
              control={control}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <InputBox label={"Email"} type={"email"} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e.target.value)
                }} />
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <div>
                  <InputBox label={"Password"} type={"password"} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e.target.value)
                  }} />
                </div>
              )}
            />
          </div>
          <div className="flex justify-between text-sm pb-6">
            <Link href={"/login"}>
              <p className="text-blue-800">Already Have An Account?</p>
            </Link>
          </div>

          <button disabled={isSubmitting} className="btn btn-success"><span style={{ display: isSubmitting ? 'block' : 'none' }} className="loading loading-spinner text-succes"></span>Signup</button>

        </div>
      </form>
    </div>
  );
};

export default SignupPage;
