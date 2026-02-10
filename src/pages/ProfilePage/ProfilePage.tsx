import { useState } from "react";
import { InputField } from "../../components/InputField/InputField";
import Layout from "../../components/Layout/Layout";
import { ReactComponent as Eye } from "../../assets/img/icons/eye.svg";
import { users } from "../../assets/mocks/users";

export function ProfilePage() {
  const [isEditable, setEditable] = useState(false)
  const [name, setName] = useState(users[0].name)
  const [companyName, setCompanyName] = useState(users[0].company)
  const [role, setRole] = useState(users[0].role)
  const [phone, setPhone] = useState(users[0].phone)
  const [email, setEmail] = useState(users[0].email)
  const [password, setPassword] = useState(users[0].password)

  return (
    <Layout>
      <div className="profile">
        <div className="profile_top">
          <h1 className="profile_title">Profile</h1>
          <button className="profile_edit-button button" onClick={() => setEditable(!isEditable)}>{isEditable ? 'Save' : 'Edit'}</button>
        </div>
        <div className="profile_wrapper">
          <form className="profile_form" action="#" method="POST">
            <InputField id={"full-name"} label={"Full name"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} disabled={!isEditable}/>
            <InputField id={"company-name"} label={"Company name"} type={"text"} value={companyName} onChange={(e) => setCompanyName(e.target.value)} disabled={!isEditable}/>
            <InputField id={"role"} label={"Role"} type={"text"} value={role} onChange={(e) => setRole(e.target.value)} disabled={!isEditable}/>
            <InputField id={"phone"} label={"Phone number"} type={"tel"} value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditable}/>
            <InputField id={"email"} label={"Email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditable}/>
            {
              password &&
              <InputField id={"password"} label={"Password"} type={"password"} value={password} icon={<Eye/>} onChange={(e) => setPassword(e.target.value)} disabled={!isEditable}/>
            }
          </form>
        </div>
      </div>
    </Layout>
  )
}
