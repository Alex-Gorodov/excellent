interface CheckboxProps {
  label?: string;
}

export function CustomCheckbox({label}: CheckboxProps) {
  return (
    <label className="checkbox" htmlFor={label} onClick={(e) => e.stopPropagation()}>
      <input className="checkbox__input visually-hidden" id={label} type="checkbox"/>
      <span className="checkbox__mark"></span>
      <span className="checkbox__label">{label?.replace('-', '')}</span>
    </label>
  )
}
