// ** Style
import style from '../style/components/footer.module.css'
// ** Assets
import twitterIcon from '../assets/icons/footer/twitterIcon.svg'
// import facebookIcon from '../assets/icons/footer/facebookIcon.svg'
import instagramIcon from '../assets/icons/footer/instagramIcon.svg'



export default function Footer() {
    return (
        <>
            <footer>
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
                <div className={style.socials}>
                    <a href='https://x.com/Mohamed_Mos_aad' target='_blank'>
                        <img src={twitterIcon} alt="twitter icon" />
                    </a>
                    <a href='https://www.instagram.com/mhmdahmedd._/' target='_blank'>
                        <img src={instagramIcon} alt="instagram icon" />
                    </a>
                </div>
                <p>© 2024 PharaohMart. All rights reserved.</p>
            </footer>
        </>
    )
}
