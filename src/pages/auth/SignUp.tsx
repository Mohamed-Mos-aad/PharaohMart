// ** Style
import style from "../../style/pages/auth/signUp.module.css";
// ** Components
import InputElement from "../../components/form/InputElement";
// ** Hooks && Tools
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
// ** Interfaces
import type { ISignUpData } from "../../interfaces";
import { useAppSelector } from "../../app/hooks";
// ** Validation
import { checkSignUpValidation } from "../../validation";
import { pushUserData } from "../../app/features/auth/signup/signUPSlice";



export default function SignUp() {
  // ** App
  const { userType } = useAppSelector((state) => state.signUp);



  // ** Default
  const navigate = useNavigate();
  const dispatch = useDispatch()



  // ** States
  const [userData, setUserData] = useState<ISignUpData>({
    userFullName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
    userConfirmPassword: "",
    role: userType,
    ...(userType === "seller" ? { userStoreName: "" } : {}),
  });
  const [errors, setErrors] = useState<ISignUpData>({
    userFullName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
    userConfirmPassword: "",
    role: "",
    ...(userType === "seller" ? { userStoreName: "" } : {}),
  });



  // ** Handlers
  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors(prev =>({
      ...prev,
      [id]: ''
    }))
  };
  const submitForm = ()=>{
    const updateErrors = checkSignUpValidation(userData);
    setErrors(updateErrors);
    const success = Object.values(updateErrors).every(value => value === '');
    if(success) {
      dispatch(pushUserData({...userData,userFullName: `{${userData.userFullName}_${Date.now()}}`}))
      otpPageHandler()
    };
  }


  const otpPageHandler = () => {
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
            error={errors.userFullName}
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userEmail"
            label="Email"
            type="text"
            name="userEmail"
            placeholder="Email"
            error={errors.userEmail}
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userPhoneNumber"
            label="Phone Number"
            type="text"
            name="userPhoneNumber"
            placeholder="Phone Number"
            error={errors.userPhoneNumber}
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userPassword"
            label="Password"
            type="password"
            name="userPassword"
            placeholder="Password"
            error={errors.userPassword}
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userConfirmPassword"
            label="Confirm Password"
            type="password"
            name="userConfirmPassword"
            placeholder="Confirm Password"
            error={errors.userConfirmPassword}
            onChange={inputValueChangeHandler}
          />
          {
            userType === 'seller' &&
            <InputElement
              id="userStoreName"
              label="Store/Business Name"
              type="text"
              name="userStoreName"
              placeholder="Store/Business Name"
              error={errors.userStoreName ?? ''}
              onChange={inputValueChangeHandler}
            />
          }
          
          <button onClick={submitForm}>Continue</button>
        </div>
      </div>
    </>
  );
}
