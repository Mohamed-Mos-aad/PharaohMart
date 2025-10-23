// ** Style
import style from "../../style/pages/auth/logIn.module.css";
// ** Components
import SwitchAuth from "../../components/auth/SwitchAuth";
import InputElement from "../../components/form/InputElement";
// ** Hooks && Tools
import { useState } from "react";
// ** Interfaces
import type { ISignUpData } from "../../hooks/interfaces";

export default function LogIn() {
  // ** States
  const [userData, setUserData] = useState<ISignUpData>({
    userFullName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
    userConfirmPassword: "",
    userStoreName: "",
  });

  // ** Handlers
  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  console.log(userData);

  return (
    <>
      <div className="global_container">
        <div className={style.auth_form}>
          <h1>Welcome back</h1>
          <InputElement
            id="userEmailOrPhone"
            label="Email or Phone"
            type="text"
            name="userEmailOrPhone"
            placeholder="Email or Phone"
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userPassword"
            label="Password"
            type="password"
            name="userPassword"
            placeholder="Password"
            onChange={inputValueChangeHandler}
          />
          <button>Login</button>
          <SwitchAuth to="signup" />
        </div>
      </div>
    </>
  );
}
