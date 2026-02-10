// interface CheckboxProps {
//   checked: boolean;
// }

export function CustomCheckbox() {
  return (
    <label className="checkbox">
      <input className="checkbox_input visually-hidden" type="checkbox"/>
      <span className="checkbox_mark"></span>
    </label>
  )
}
