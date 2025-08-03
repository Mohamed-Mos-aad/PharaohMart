// ** Style
import style from '../../style/pages/auth/welcome.module.css'



export default function Welcome() {
    return (
        <>
            <div className="global_container">
                <div className={style.auth_welcome}>
                    <h1>Join our community</h1>
                    <h2>Choose your role to get started</h2>
                    <div className={style.welcome_btns}>
                        <button>Shop for products</button>
                        <button>Sell your products online</button>
                    </div>
                </div>
            </div>
        </>
    )
}