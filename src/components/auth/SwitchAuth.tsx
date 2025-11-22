// ** Style
import style from '../../style/components/auth/switchAuth.module.css'
// ** Hooks && Tools
import { Link } from 'react-router-dom';



// ** Interfaces
interface ISwitchAuth{
    to: 'signup' | 'login';
}



export default function SwitchAuth({to}:ISwitchAuth) {
    return (
        <>
            <div className={style.auth_switch}>
                {
                    to === 'login' ?
                    <h2>Already have an account? <Link to={'/u/login'}>Log in</Link></h2>
                    :
                    <h2>Don't have an account? <Link to={'/u/sign-up'}>Sign Up</Link></h2>
                }
            </div>
        </>
    )
}
