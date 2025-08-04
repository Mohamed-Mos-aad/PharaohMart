// ** Style
import { useNavigate } from 'react-router'
import style from '../../style/pages/auth/welcome.module.css'



export default function Welcome() {
    // ** Defaults
    const navigate = useNavigate();



    // ** Handlers
    const openSignUpHandler = ()=>{
        navigate('/u/sign-up')
    }



    return (
        <>
            <div className="global_container">
                <div className={style.auth_welcome}>
                    <h1>Join our community</h1>
                    <h2>Choose your role to get started</h2>
                    <div className={style.welcome_btns}>
                        <button onClick={openSignUpHandler}>Shop for products</button>
                        <button onClick={openSignUpHandler}>Sell your products online</button>
                    </div>
                </div>
            </div>
        </>
    )
}