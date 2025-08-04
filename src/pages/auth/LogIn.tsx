// ** Style
import style from '../../style/pages/auth/logIn.module.css'
// ** Components
import SwitchAuth from '../../components/auth/SwitchAuth'
import InputElement from '../../components/form/InputElement'



export default function LogIn() {
    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Welcome back</h1>
                    <InputElement id='userEmailOrPhone' label='Email or Phone' type='text' name='userEmailOrPhone' placeholder='Email or Phone'/>
                    <InputElement id='userPassword' label='Password' type='password' name='userPassword' placeholder='Password'/>
                    <button>Login</button>
                    <SwitchAuth to='signup'/>
                </div>
            </div>
        </>
    )
}