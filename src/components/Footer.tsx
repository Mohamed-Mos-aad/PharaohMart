// ** Style
import style from '../style/components/footer.module.css'
// ** Assets
import twitterIcon from '../assets/icons/footer/twitterIcon.svg'
import facebookIcon from '../assets/icons/footer/facebookIcon.svg'
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
                    <span>
                        <img src={twitterIcon} alt="twitter icon" />
                    </span>
                    <span>
                        <img src={facebookIcon} alt="facebook icon" />
                    </span>
                    <span>
                        <img src={instagramIcon} alt="instagram icon" />
                    </span>
                </div>
                <h3>© 2024 PharaohMart. All rights reserved.</h3>
            </footer>
        </>
    )
}
