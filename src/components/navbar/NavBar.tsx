// ** Style
import style from '../../style/components/navbar.module.css'
// ** Assets
import searchIcon from '../../assets/icons/navbar/searchIcon.svg'
import heartIcon from '../../assets/icons/navbar/heartIcon.svg'
import cartIcon from '../../assets/icons/navbar/cartIcon.svg'
import addAuthIcon from '../../assets/icons/navbar/addAuthIcon.svg'
// ** Hooks && Tools
import { useState } from 'react'



export default function NavBar() {
    // ** States
    const [dropDownMenuOpened,setDropDownMenuOpened] = useState<boolean>(false);



    // ** Handlers
    const dropDownMenuStateToggelHandler = ()=>{
        setDropDownMenuOpened(!dropDownMenuOpened);
    }



    return (
        <>
            <nav>
                <div className={style.nav_part}>
                    <div className={style.logo}>
                        PharaohMart
                    </div>
                    <ul className={style.menu}>
                        <li>Home</li>
                        <li onClick={dropDownMenuStateToggelHandler}>Shop</li>
                        <li>Deals</li>
                        <li>Services</li>
                    </ul>
                    {
                        dropDownMenuOpened && 
                        <ul className={style.dropdown_menu}>
                            <li>clothes</li>
                            <li>cars</li>
                            <li>phones</li>
                        </ul>
                    }
                    
                </div>
                <div className={style.nav_part}>
                    <div className={style.search}>
                        <input type="text" placeholder="Search"/>
                        <img src={searchIcon} alt="search icon" />
                    </div>
                    <div className={style.options}>
                        <span>
                            <img src={heartIcon} alt="heart icon" />
                        </span>
                        <span>
                            <img src={cartIcon} alt="cart icon" />
                        </span>
                        <span>
                            <img src={addAuthIcon} alt="addAuth icon" />
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}