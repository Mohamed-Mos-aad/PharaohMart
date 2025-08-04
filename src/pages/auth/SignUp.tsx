// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Components
import SwitchAuth from '../../components/auth/SwitchAuth'
import InputElement from '../../components/form/InputElement'
import { useNavigate } from 'react-router'



export default function SignUp() {
    // ** Default
    const navigate = useNavigate();



    // ** Handlers
    const otpPageHandler = ()=>{
        navigate('/u/otp');
    }



    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Create your account</h1>
                    <InputElement id='userFullName' label='Full Name' type='text' name='userFullName' placeholder='Full Name'/>
                    <InputElement id='userEmail' label='Email' type='text' name='userEmail' placeholder='Email'/>
                    <InputElement id='userPhoneNumber' label='Phone Number' type='text' name='userPhoneNumber' placeholder='Phone Number'/>
                    <InputElement id='userPassword' label='Password' type='password' name='userPassword' placeholder='Password'/>
                    <InputElement id='userConfirmPassword' label='Confirm Password' type='password' name='userConfirmPassword' placeholder='Confirm Password'/>
                    <InputElement id='userStoreName' label='Store/Business Name' type='text' name='userStoreName' placeholder='Store/Business Name'/>
                    <button onClick={otpPageHandler}>Continue</button>
                    <SwitchAuth to='login'/>
                </div>
            </div>
        </>
    )
}
