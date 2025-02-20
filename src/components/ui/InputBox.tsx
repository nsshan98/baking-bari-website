"use client";
import { Input } from "@nextui-org/react";

type InputBoxProps = {
  label: string;
  type: string;
  isInvalid?: boolean;
  errorMessage: string | undefined;
};

const InputBox = ({
  label,
  type,
  isInvalid,
  errorMessage,
  ...props
}: InputBoxProps) => {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          label={label}
          type={type}
          variant="bordered"
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputBox;
