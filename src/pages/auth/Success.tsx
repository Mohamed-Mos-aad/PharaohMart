// ** Style
import style from '../../style/pages/auth/signUp.module.css'



export default function Success() {
    return (
        <>
            <div className="global_container">
                <div className={style.auth_form}>
                    <h1>Account created successfully!</h1>
                    <p>Your account has been successfully created. You can now access all the features and services.</p>
                    <button>Go to Dashboard</button>
                </div>
            </div>
        </>
    )
}
