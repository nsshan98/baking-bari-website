"use client";

type InputBoxProps = {
  type: string;
  label: string
  value?: string,
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const InputBox = ({ type, label, value, required, onChange, ...props }: InputBoxProps) => {
  return (
    <div className="pb-1">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input required={required} type={type} value={value} onChange={onChange} {...props} className="input input-bordered w-full" />
    </div>
  );
};

export default InputBox;

