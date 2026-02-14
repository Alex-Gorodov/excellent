// interface CheckboxProps {
//   checked: boolean;
// }

export function CustomCheckbox() {
  return (
    <label className="checkbox">
      <input className="checkbox__input visually-hidden" type="checkbox"/>
      <span className="checkbox__mark"></span>
    </label>
  )
}
