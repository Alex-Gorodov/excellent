import { HTMLInputTypeAttribute, useState } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  disabled: boolean | false;
  icon?: React.ReactNode;
  onChange: (e: any) => void;
}

export function InputField({id, label, type, value, icon, disabled, onChange}: InputFieldProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <label className="input" htmlFor={id}>
      <span className="input_label">{label}</span>
      <input className="input_field" id={id} type={type === 'password' ? isPasswordVisible ? type : 'text' : type} onChange={onChange} value={value} disabled={disabled}/>
      <span className="input_icon" role="button" onClick={() => setPasswordVisible(!isPasswordVisible)}>{icon}</span>
    </label>
  )
}
