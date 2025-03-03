"use client";

type InputBoxProps = {
  type: string;
};

const InputBox = ({ type, ...props }: InputBoxProps) => {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <div className="input input-bordered w-full">
        <input type={type} {...props} />
      </div>
    </div>
  );
};

export default InputBox;
