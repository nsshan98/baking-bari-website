"use client";
import { Input } from "@nextui-org/react";

type InputBoxProps = {
  label: string;
  type: string;
};

const InputBox = ({ label, type }: InputBoxProps) => {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input label={label} type={type} variant="bordered" />
      </div>
    </div>
  );
};

export default InputBox;
