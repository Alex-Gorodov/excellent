import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import Layout from "../../components/Layout/Layout";
import { ReactComponent as Eye } from "../../assets/img/icons/eye.svg";
import { users } from "../../assets/mocks/users";

export function ProfilePage() {
  const [isEditable, setEditable] = useState(false)
  const [name, setName] = useState(users[0].name)
  const [companyName, setCompanyName] = useState(users[0].company.name)
  const [role, setRole] = useState(users[0].role)
  const [phone, setPhone] = useState(users[0].phone)
  const [email, setEmail] = useState(users[0].email)
  const [password, setPassword] = useState(users[0].password)

  const [isPasswordEditing, setPasswordEditing] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //TODO submitting and saving and popup of success and confirm/cancel buttons -- clear the fields

  return (
    <Layout>
      <div className="section profile">
        <div className="section_header profile_top">
          <h1 className="title">Profile</h1>
          <button className="profile_edit-button button" type={isEditable ? 'submit' : 'button'} onClick={() => setEditable(!isEditable)}>{isEditable ? 'Save' : 'Edit'}</button>
        </div>
        <div className="section_wrapper">
          <form className="profile_form" action="#" method="POST">
            <div className="profile_image-wrapper">
              <span className="profile_image-label input_label">Your photo</span>
              <div>
                <img src={users[0].avatar} alt={users[0].name} className="profile_image" width={150} height={150}/>
                {
                  isEditable
                  &&
                  <button className="profile_image-btn button">Upload image</button>
                }
              </div>
            </div>
            <InputField id={"full-name"} name="full-name" label={"Full name"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditable}/>
            <InputField id={"company-name"} name="company-name" label={"Company name"} type={"text"} value={companyName} onChange={(e) => setCompanyName(e.target.value)} disabled={!isEditable}/>
            <InputField id={"role"} name="role" label={"Role"} type={"text"} value={role} onChange={(e) => setRole(e.target.value)} disabled={!isEditable}/>
            <InputField id={"phone"} name="phone" label={"Phone number"} type={"tel"} value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditable}/>
            <InputField id={"email"} name="email" label={"Email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditable}/>
            {
              password &&
              <div className="profile_password-wrapper">
                <InputField id={"password"} name="password" label={"Password"} type={"password"} value={password} icon={isEditable && <Eye/>} onChange={(e) => setPassword(e.target.value)} disabled={!isEditable}/>
                {
                  isPasswordEditing
                  &&
                  <>
                    <InputField id={"new-password"} name="new-password" label={"New password"} type={"password"} value={newPassword} icon={isEditable && <Eye/>} onChange={(e) => setNewPassword(e.target.value)} disabled={!isEditable}/>
                    <InputField id={"confirm-password"} name="confirm-password" label={"Confirm password"} type={"password"} value={confirmPassword} icon={isEditable && <Eye/>} onChange={(e) => setConfirmPassword(e.target.value)} disabled={!isEditable}/>
                  </>
                }

                <div className="profile_buttons">
                  {isEditable && <button className="button" onClick={() => setPasswordEditing(!isPasswordEditing)} type="button">{isPasswordEditing ? 'Save' : 'Change password'}</button>}
                  {isPasswordEditing && <button className="button button--secondary" onClick={() => setPasswordEditing(!isPasswordEditing)} type="reset">Cancel</button>}
                </div>

              </div>
            }
          </form>
        </div>
      </div>
    </Layout>
  )
}
