// ** Style
import style from "../../style/pages/auth/logIn.module.css";
// ** Components
import SwitchAuth from "../../components/auth/SwitchAuth";
import InputElement from "../../components/form/InputElement";
// ** Hooks && Tools
import { useState } from "react";
import { useNavigate } from "react-router";
// ** Interfaces
import type { ISignInData } from "../../interfaces";
// ** Validation
import { checkLogInValidation } from "../../validation";
// ** Api
import { LogInAction } from "../../api/auth/LogIn";


export default function LogIn() {
  // ** Defaults
  const navigate = useNavigate();



  // ** States
  const [userData, setUserData] = useState<ISignInData>({
    userEmail: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState<ISignInData>({
    userEmail: "",
    userPassword: "",
  });



  // ** Handlers
  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const logInHandler = async ()=>{
    const updateErrors = checkLogInValidation(userData);
    setErrors(updateErrors);
    const success = Object.values(updateErrors).every(value => value === '');
    if(success) {
        try{
          const result = await LogInAction(userData);
          console.log(result)
          if (result === "Invalid identifier or password" ) {
            setErrors(prev => ({
              ...prev,
              userEmail: "Invalid Emai or password",
            }));
            return
          }
          navigate('/')
        }catch(error){
          console.log(error);
        }
    };
  }



  return (
    <>
      <div className="global_container">
        <div className={style.auth_form}>
          <h1>Welcome back</h1>
          <InputElement
            id="userEmail"
            label="Email"
            type="text"
            name="userEmail"
            error={errors.userEmail}
            placeholder="Email"
            onChange={inputValueChangeHandler}
          />
          <InputElement
            id="userPassword"
            label="Password"
            type="password"
            name="userPassword"
            error={errors.userPassword}
            placeholder="Password"
            onChange={inputValueChangeHandler}
          />
          <button onClick={logInHandler}>Login</button>
          <SwitchAuth to="signup" />
        </div>
      </div>
    </>
  );
}
