// ** Style
import style from "../../style/pages/auth/signUp.module.css";
// ** Components
import SwitchAuth from "../../components/auth/SwitchAuth";
import InputElement from "../../components/form/InputElement";
// ** Hooks && Tools
import { useNavigate } from "react-router";
import { useState } from "react";
// ** Interfaces
import type { ISignUpData } from "../../hooks/interfaces";

export default function SignUp() {
  // ** Default
  const navigate = useNavigate();

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
  const otpPageHandler = () => {
    console.log(userData);
    navigate("/u/otp");
  };

  return (
    <>
      <div className="global_container">
        <div className={style.auth_form}>
          <h1>Create your account</h1>
          <InputElement
            id="userFullName"
            label="Full Name"
            type="text"
            name="userFullName"
            placeholder="Full Name"
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userEmail"
            label="Email"
            type="text"
            name="userEmail"
            placeholder="Email"
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userPhoneNumber"
            label="Phone Number"
            type="text"
            name="userPhoneNumber"
            placeholder="Phone Number"
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
          <InputElement
            id="userConfirmPassword"
            label="Confirm Password"
            type="password"
            name="userConfirmPassword"
            placeholder="Confirm Password"
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userStoreName"
            label="Store/Business Name"
            type="text"
            name="userStoreName"
            placeholder="Store/Business Name"
            onChange={inputValueChangeHandler}
          />
          <button onClick={otpPageHandler}>Continue</button>
          <SwitchAuth to="login" />
        </div>
      </div>
    </>
  );
}
