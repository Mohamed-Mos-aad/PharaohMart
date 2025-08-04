// ** Style
import style from '../../style/pages/auth/otp.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router'



export default function Otp() {
    // ** Default
    const navigate = useNavigate();



    // ** Handlers
    const successPageHandler = ()=>{
        navigate('/u/success')
    }



    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Verify your identity</h1>
                    <p>We sent a 6-digit verification code to your email address. Please enter it below to continue.</p>
                    <div className={style.otp_code}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <h2>00:00</h2>
                    <button onClick={successPageHandler}>Continue</button>
                </div>
            </div>
        </>
    )
}