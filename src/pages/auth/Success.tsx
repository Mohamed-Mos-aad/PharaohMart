// ** Style
import style from '../../style/pages/auth/signUp.module.css'
// ** Hooks && Tools
import { useNavigate } from 'react-router';



export default function Success() {
    // ** Default
    const navigate = useNavigate();



    // ** 
    const openSignInHandler = ()=>{navigate('/u/login')}



    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Account created successfully!</h1>
                    <p>Your account has been successfully created. You can now access all the features and services.</p>
                    <button onClick={openSignInHandler}>Go to Log in</button>
                </div>
            </div>
        </>
    )
}
