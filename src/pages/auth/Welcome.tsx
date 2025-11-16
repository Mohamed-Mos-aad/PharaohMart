// ** Hooks && Tools
import { useNavigate } from 'react-router'
// ** Style
import style from '../../style/pages/auth/welcome.module.css'
// ** Components
import SwitchAuth from '../../components/auth/SwitchAuth';
import { useDispatch } from 'react-redux';
import { changeSignUpUserType } from '../../app/features/auth/signup/signUPSlice';



export default function Welcome() {
    // ** Defaults
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // ** Handlers
    const openSignUpHandler = (type: 'seller' | 'customer')=>{
        navigate('/u/sign-up')
        dispatch(changeSignUpUserType(type))
    }



    return (
        <>
            <div className="global_container">
                <div className={style.auth_welcome}>
                    <h1>Join our community</h1>
                    <h2>Choose your role to get started</h2>
                    <div className={style.welcome_btns}>
                        <button onClick={()=>{openSignUpHandler('customer')}}>Shop for products</button>
                        <button onClick={()=>{openSignUpHandler('seller')}}>Sell your products online</button>
                    </div>
                    <SwitchAuth to="login" />
                </div>
            </div>
        </>
    )
}