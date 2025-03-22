"use client";
import { doUserSignIn } from "@/app/actions/auth";
import InputBox from "@/components/ui/InputBox";
import { userLoginSchema, UserLoginSchemaTypes } from "@/schema-types/user-type";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { control, handleSubmit, formState: { isSubmitting, errors } } = useForm<UserLoginSchemaTypes>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(userLoginSchema)
  })



  const onSubmit = async (values: UserLoginSchemaTypes) => {

    try {
      const formData = new FormData()
      formData.append('email', values.email)
      formData.append('password', values.password)
      const response = await doUserSignIn(formData)
      if (response?.error) {
        toast.error('Failed to login')
      }
      else {
        toast.success('Succesfully login')

      }
    } catch (error) {
      toast.error('Something went wrong')
      console.log(error)
    }
    console.log(errors)
  }


  return (
    <div className="p-2">
      <form className="m-auto border-2 p-2 w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2">
          <p className="text-center font-bold text-2xl mb-4">Login</p>
          <Controller
            name="email"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <div>
                <InputBox label={"Email"} type={"email"} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e.target.value)
                }}
                />
              </div>
            )}
          />
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
          <div className="flex justify-between text-sm pb-6">
            <Link href={"#"}>
              <p className="text-blue-800">Forget Password?</p>
            </Link>
            <Link href={"/signup"}>
              <p className="text-blue-800">Wanna Join?</p>
            </Link>
          </div>
          <button disabled={isSubmitting} className="btn btn-success"><span style={{ display: isSubmitting ? 'block' : 'none' }} className="loading loading-spinner text-succes"></span>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
