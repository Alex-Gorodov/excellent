import { HTMLInputTypeAttribute, useState } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  name: string;
  placeholder?: string;
  disabled: boolean | false;
  className?: string;
  icon?: React.ReactNode;
  onChange: (e: any) => void;
}

export function InputField({id, label, name, type, value, placeholder, icon, disabled, className, onChange}: InputFieldProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <label className={`input ${className ? className + '_input' : ''}`} htmlFor={id}>
      <span className={`input_label ${className ? className + '_input-label' : ''}`}>{label}</span>
      <input className={`input_field ${className ? className + '_input-field' : ''}`} id={id} name={name} type={type === 'password' ? !isPasswordVisible ? type : 'text' : type} onChange={onChange} value={value} placeholder={placeholder} disabled={disabled}/>
      <span className={`input_icon ${className ? className + '_input-icon' : ''}`} role="button" onClick={() => setPasswordVisible(!isPasswordVisible)}>{icon}</span>
    </label>
  )
}
